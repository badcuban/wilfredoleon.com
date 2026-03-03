export const prerender = false;

import type { APIRoute } from "astro";
import sgMail from "@sendgrid/mail";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function sanitize(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}

const jsonHeaders = { "Content-Type": "application/json" };

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // BotID verification (Vercel only — skipped in local dev)
    try {
      const { checkBotId } = await import("botid/server");
      const { isBot } = await checkBotId();
      if (isBot) {
        return new Response(
          JSON.stringify({ error: "Request blocked." }),
          { status: 403, headers: jsonHeaders },
        );
      }
    } catch {
      // BotID unavailable outside Vercel
    }

    const ip = clientAddress || "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({
          error: "Too many messages. Please try again later.",
        }),
        { status: 429, headers: jsonHeaders },
      );
    }

    const body = await request.json();
    const name = sanitize(String(body.name || ""));
    const email = sanitize(String(body.email || ""));
    const message = sanitize(String(body.message || ""));

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: jsonHeaders },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: jsonHeaders },
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message is too long." }),
        { status: 400, headers: jsonHeaders },
      );
    }

    const apiKey = import.meta.env.SENDGRID_API_KEY;
    const toEmail = import.meta.env.CONTACT_TO_EMAIL;
    const fromEmail = import.meta.env.SENDGRID_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing SendGrid environment variables");
      return new Response(
        JSON.stringify({ error: "Server configuration error." }),
        { status: 500, headers: jsonHeaders },
      );
    }

    sgMail.setApiKey(apiKey);

    await sgMail.send({
      to: toEmail,
      from: { email: fromEmail, name: "wilfredoleon.com" },
      replyTo: { email, name },
      subject: `wilfredoleon.com — ${name}`,
      text: `New message via wilfredoleon.com\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: [
        '<div style="font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif;max-width:560px;margin:0 auto;background:#09090b;border-radius:8px;overflow:hidden">',
        '  <div style="padding:24px 28px;border-bottom:1px solid #27272a">',
        '    <span style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#FF5900">wilfredoleon.com</span>',
        "  </div>",
        '  <div style="padding:28px">',
        '    <h2 style="color:#fff;margin:0 0 24px;font-size:16px;font-weight:600">New contact form message</h2>',
        '    <table style="width:100%;border-collapse:collapse">',
        '      <tr>',
        `        <td style="padding:10px 0;color:#71717a;font-size:13px;width:60px;vertical-align:top">From</td>`,
        `        <td style="padding:10px 0;color:#e4e4e7;font-size:14px">${name}</td>`,
        '      </tr>',
        '      <tr>',
        `        <td style="padding:10px 0;color:#71717a;font-size:13px;vertical-align:top">Email</td>`,
        `        <td style="padding:10px 0;font-size:14px"><a href="mailto:${email}" style="color:#FF5900;text-decoration:none">${email}</a></td>`,
        '      </tr>',
        '    </table>',
        '    <div style="margin:20px 0;border-top:1px solid #27272a"></div>',
        `    <p style="color:#e4e4e7;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>`,
        "  </div>",
        '  <div style="padding:16px 28px;border-top:1px solid #27272a;text-align:center">',
        '    <span style="font-size:11px;color:#52525b">Sent from the contact form at <a href="https://wilfredoleon.com" style="color:#71717a;text-decoration:none">wilfredoleon.com</a></span>',
        "  </div>",
        "</div>",
      ].join("\n"),
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: jsonHeaders },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      { status: 500, headers: jsonHeaders },
    );
  }
};
