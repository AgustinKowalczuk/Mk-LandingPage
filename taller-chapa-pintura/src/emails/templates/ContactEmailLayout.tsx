
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
import type { ReactNode } from "react";
import type { ContactEmailData } from "@/emails/types";

type ContactEmailLayoutProps = {
  contact: ContactEmailData;
  preview: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function ContactEmailLayout({
  contact,
  preview,
  title,
  intro,
  children,
}: ContactEmailLayoutProps) {
  const labelStyle = {
    color: "#71717a",
    fontSize: "12px",
    margin: "0 0 4px",
  };

  const valueStyle = {
    color: "#27272a",
    fontSize: "14px",
    lineHeight: "22px",
    margin: "0 0 14px",
    overflowWrap: "anywhere" as const,
  };

  return (
    <Html lang="es">
      <Head />
      <Preview>{preview}</Preview>

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
            padding: "28px",
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
                fontSize: "25px",
                lineHeight: "32px",
                margin: "12px 0",
              }}
            >
              {title}
            </Heading>

            <Text
              style={{
                color: "#52525b",
                fontSize: "14px",
                lineHeight: "23px",
              }}
            >
              {intro}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e4e4e7", margin: "24px 0" }} />

          {children}

          <Hr style={{ borderColor: "#e4e4e7", margin: "24px 0" }} />

          <Heading
            as="h2"
            style={{ color: "#18181b", fontSize: "17px" }}
          >
            Datos de contacto
          </Heading>

          <Text style={labelStyle}>Nombre</Text>
          <Text style={valueStyle}>{contact.fullName}</Text>

          <Text style={labelStyle}>Correo electrónico</Text>
          <Text style={valueStyle}>{contact.email}</Text>

          <Text style={labelStyle}>Teléfono</Text>
          <Text style={valueStyle}>{contact.phoneNumber}</Text>

          <Text style={labelStyle}>Asunto</Text>
          <Text style={valueStyle}>{contact.asunto}</Text>

          <Text style={labelStyle}>Prioridad asignada</Text>
          <Text style={valueStyle}>{contact.urgencia}</Text>

          <Hr style={{ borderColor: "#e4e4e7", margin: "24px 0" }} />

          <Text
            style={{
              color: "#71717a",
              fontSize: "12px",
              lineHeight: "19px",
            }}
          >
            Notificación automática del sitio web de MK Cars. La consulta
            requiere revisión por parte del responsable del taller.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
