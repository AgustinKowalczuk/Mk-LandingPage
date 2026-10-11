
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
} from "@react-email/components";

import type { ContactEmailData } from "@/emails/types";

type ContactNotificationProps = {
  contact: ContactEmailData;
};

export default function ContactNotification({
  contact,
}: ContactNotificationProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>
        Nuevo contacto de MK Cars: {contact.fullName}
      </Preview>

      <Body
        style={{
          backgroundColor: "#f4f4f5",
          fontFamily: "Arial, Helvetica, sans-serif",
          margin: 0,
          padding: "32px 12px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "32px",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          <Section>
            <Text
              style={{
                color: "#ca8a04",
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              MK CARS
            </Text>

            <Heading
              style={{
                color: "#18181b",
                fontSize: "26px",
                margin: "12px 0",
              }}
            >
              Nuevo mensaje de contacto
            </Heading>

            <Text style={{ color: "#52525b", fontSize: "15px" }}>
              Recibiste una consulta desde la página web.
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e4e4e7", margin: "24px 0" }} />

          <Section>
            <Text><strong>Nombre:</strong> {contact.fullName}</Text>
            <Text><strong>Email:</strong> {contact.email}</Text>
            <Text><strong>Teléfono:</strong> {contact.phoneNumber}</Text>
            <Text><strong>Asunto:</strong> {contact.asunto}</Text>
            <Text><strong>Urgencia:</strong> {contact.urgencia}</Text>

            {contact.DNI && (
              <Text><strong>DNI:</strong> {contact.DNI}</Text>
            )}

            {contact.date && (
              <Text><strong>Fecha solicitada:</strong> {contact.date}</Text>
            )}
          </Section>

          <Hr style={{ borderColor: "#e4e4e7", margin: "24px 0" }} />

          <Section>
            <Heading as="h2" style={{ fontSize: "18px", color: "#18181b" }}>
              Mensaje
            </Heading>

            <Text
              style={{
                color: "#52525b",
                fontSize: "15px",
                lineHeight: "24px",
                whiteSpace: "pre-wrap",
              }}
            >
              {contact.text}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e4e4e7", margin: "24px 0" }} />

          <Text style={{ color: "#71717a", fontSize: "12px" }}>
            Mensaje automático generado desde el sitio web de MK Cars.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
