import { NextResponse } from "next/server";

const SWEEGO_ENDPOINT = "https://api.sweego.io/send";
const DEFAULT_TO_EMAIL = "contact@jabby.io";
const DEFAULT_FROM_EMAIL = "Jabby <noreply@jabby.io>";

type ContactPayload = {
  name?: unknown;
  role?: unknown;
  company?: unknown;
  email?: unknown;
  sector?: unknown;
  volume?: unknown;
  message?: unknown;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseSender(value: string) {
  const match = value.match(/^(.*)<([^>]+)>$/);

  if (!match) {
    return {
      name: "Jabby",
      email: value.trim()
    };
  }

  return {
    name: match[1].trim().replace(/^"|"$/g, "") || "Jabby",
    email: match[2].trim()
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "La demande est illisible. Merci de réessayer." },
      { status: 400 }
    );
  }

  const name = asString(payload.name);
  const role = asString(payload.role);
  const company = asString(payload.company);
  const email = asString(payload.email).toLowerCase();
  const sector = asString(payload.sector);
  const volume = asString(payload.volume);
  const message = asString(payload.message);

  if (!name || !isValidEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Merci de renseigner un nom et un email professionnel valides."
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.SWEEGO_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Le formulaire n'est pas encore configuré. Écrivez-nous directement."
      },
      { status: 500 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const from = parseSender(process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL);
  const subject = `Demande de démo Jabby — ${company || name}`;
  const body = [
    "Nouvelle demande de démo depuis jabby.io",
    "",
    `Nom : ${name}`,
    role ? `Fonction : ${role}` : null,
    company ? `Société : ${company}` : null,
    `Email : ${email}`,
    sector ? `Secteur : ${sector}` : null,
    volume ? `Volume de créances en cours : ${volume}` : null,
    "",
    "Message :",
    message || "(non renseigné)"
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(SWEEGO_ENDPOINT, {
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
      subject,
      "message-txt": body
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "L'envoi n'a pas abouti. Écrivez-nous directement à contact@jabby.io."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement."
  });
}
