import ContactNotification from "@/emails/templates/ContactNotification";
import type { ContactEmailData } from "@/emails/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST() {
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
    const resend = new Resend(apiKey);

    // Dentro de POST, antes de resend.emails.send:
    const contact: ContactEmailData = {
      fullName: "Juan Pérez",
      email: "juan@example.com",
      phoneNumber: "+54 9 3541 123456",
      asunto: "presupuesto",
      urgencia: "no tan urgente",
      DNI: "12345678",
      date: "2026-10-15",
      text: "Hola, quisiera consultar por un presupuesto para reparar un golpe en la puerta.",
    };

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Nuevo contacto: ${contact.asunto}`,
      react: ContactNotification({ contact }),
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        { error: "Resend no pudo enviar el correo." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Resend aceptó el envío del correo.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Error inesperado:", error);

    return NextResponse.json(
      { error: "Error interno al enviar el correo." },
      { status: 500 },
    );
  }
}
