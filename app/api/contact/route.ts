import { NextResponse } from "next/server";

const SWEEGO_API_URL = "https://api.sweego.io/send";
const DEFAULT_TO_EMAIL = "contact@jabby.io";
const DEFAULT_FROM_EMAIL = "Jabby <noreply@jabby.io>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function parseSender(value: string) {
  const match = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (match) {
    return {
      name: match[1].trim() || "Jabby",
      email: match[2].trim()
    };
  }

  return {
    name: "Jabby",
    email: value.trim()
  };
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requete invalide." },
      { status: 400 }
    );
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim().toLowerCase();
  const message = String(payload.message ?? "").trim();

  if (name.length < 2 || name.length > 120 || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Merci de renseigner un nom et un email professionnel valides." },
      { status: 400 }
    );
  }

  if (message.length > 4000) {
    return NextResponse.json(
      { ok: false, message: "Votre message est trop long." },
      { status: 400 }
    );
  }

  const apiKey = process.env.SWEEGO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, message: "Le formulaire n'est pas encore configuré." },
      { status: 500 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const from = parseSender(process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL);

  const emailBody = [
    "Nouvelle demande de demo jabby",
    "",
    `Nom : ${name}`,
    `Email : ${email}`,
    "",
    "Message :",
    message || "Aucun message renseigne."
  ].join("\n");

  const sweegoResponse = await fetch(SWEEGO_API_URL, {
    method: "POST",
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      channel: "email",
      provider: "sweego",
      recipients: [{ email: toEmail }],
      from,
      subject: `Nouvelle demande de demo jabby - ${name}`,
      "message-txt": emailBody
    })
  });

  if (!sweegoResponse.ok) {
    const responseText = await sweegoResponse.text().catch(() => "");
    console.error("Sweego contact email failed", {
      status: sweegoResponse.status,
      response: responseText
    });

    return NextResponse.json(
      { ok: false, message: "Impossible d'envoyer la demande pour le moment." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
