import ContactNotification from "@/emails/templates/ContactNotification";
import type { ContactEmailData } from "@/emails/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const URGENCY_BY_SUBJECT: Record<string, string> = {
  presupuesto: "no tan urgente",
  restauracion: "nada urgente",
  "garantia del trabajo": "urgente",
  "reclamos en general": "urgente",
};

const SUBJECTS = Object.keys(URGENCY_BY_SUBJECT);

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Faltan variables de entorno de Resend." },
      { status: 500 },
    );
  }

  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud no es válido." },
        { status: 400 },
      );
    }

    const payload = body as Record<string, unknown>;

    const fullName = cleanString(payload.fullName);
    const email = cleanString(payload.email).toLowerCase();
    const phoneNumber = cleanString(payload.phoneNumber);
    const text = cleanString(payload.text);
    const asunto = cleanString(payload.asunto).toLowerCase();
    const DNI = cleanString(payload.DNI);
    const date = cleanString(payload.date);

    const errors: Record<string, string> = {};

    if (fullName.length < 2 || fullName.length > 100) {
      errors.fullName = "Ingresá un nombre de entre 2 y 100 caracteres.";
    }

    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Ingresá un correo electrónico válido.";
    }

    if (phoneNumber.length < 6 || phoneNumber.length > 30) {
      errors.phoneNumber = "Ingresá un teléfono válido.";
    }

    if (text.length < 5 || text.length > 5000) {
      errors.text = "El mensaje debe tener entre 5 y 5000 caracteres.";
    }

    if (!SUBJECTS.includes(asunto)) {
      errors.asunto = "Seleccioná un asunto válido.";
    }

    if (asunto === "presupuesto") {
      if (!DNI || DNI.length > 20) {
        errors.DNI = "El DNI es obligatorio para solicitar un presupuesto.";
      }

      // Validar formato y que la fecha exista en el calendario.
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
      const validDate =
        match !== null &&
        Number(match[2]) >= 1 &&
        Number(match[2]) <= 12 &&
        Number(match[3]) >= 1 &&
        Number(match[3]) <=
          new Date(Number(match[1]), Number(match[2]), 0).getDate();

      if (!validDate) {
        errors.date = "Seleccioná una fecha válida para el turno solicitado.";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Revisá los datos del formulario.", fields: errors },
        { status: 400 },
      );
    }

    // La urgencia se determina en el servidor.
    const contact: ContactEmailData = {
      fullName,
      email,
      phoneNumber,
      text,
      asunto,
      urgencia: URGENCY_BY_SUBJECT[asunto],
      ...(asunto === "presupuesto" ? { DNI, date } : {}),
    };

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Nuevo contacto MK Cars: ${asunto}`,
      react: ContactNotification({ contact }),
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        { error: "No se pudo enviar el correo. Intentá nuevamente." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Tu consulta fue enviada correctamente.",
      id: data?.id,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "El JSON enviado no es válido." },
        { status: 400 },
      );
    }

    console.error("Error inesperado:", error);

    return NextResponse.json(
      { error: "Error interno al procesar el formulario." },
      { status: 500 },
    );
  }
}
