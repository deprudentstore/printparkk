import nodemailer from "nodemailer";

// Email marketing / transactional mail. All SMTP_* env vars are optional —
// if unset, sendWelcomeEmail() is a safe no-op so the site keeps working
// without email configured.
export function getTransporter() {
  if (!process.env.SMTP_HOST) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

export async function sendWelcomeEmail(to: string) {
  const transporter = getTransporter();
  if (!transporter) return;
  await transporter.sendMail({
    from: process.env.SMTP_FROM || "PrintParkk <hello@printparkk.com>",
    to,
    subject: "Welcome to PrintParkk 🎨",
    html: `
      <div style="font-family:Inter,Arial,sans-serif;background:#0B0B0F;color:#fff;padding:32px;border-radius:12px;max-width:480px;margin:auto">
        <h1 style="color:#F5A623;font-size:20px;margin:0 0 12px">Welcome to PrintParkk!</h1>
        <p style="color:#ccc;font-size:14px;line-height:1.6">
          Thanks for subscribing. You'll be the first to hear about new designs, seasonal offers and package discounts.
        </p>
        <a href="${process.env.NEXT_PUBLIC_BASE_URL || "#"}/portfolio"
           style="display:inline-block;margin-top:16px;background:#F5A623;color:#0B0B0F;text-decoration:none;
                  font-weight:600;padding:10px 20px;border-radius:8px;font-size:14px">
          Browse Our Designs
        </a>
      </div>
    `
  });
}

export async function sendQuoteNotification(payload: { name: string; email: string; phone?: string; message: string }) {
  const transporter = getTransporter();
  if (!transporter || !process.env.NOTIFY_EMAIL) return;
  await transporter.sendMail({
    from: process.env.SMTP_FROM || "PrintParkk <hello@printparkk.com>",
    to: process.env.NOTIFY_EMAIL,
    subject: `New quote request from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || "-"}\n\n${payload.message}`
  });
}
