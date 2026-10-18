
import { Heading, Section, Text } from "@react-email/components";
import ContactEmailLayout from "./ContactEmailLayout";
import type { ContactEmailData } from "@/emails/types";

export default function ClaimNotification({
  contact,
}: {
  contact: ContactEmailData;
}) {
  return (
    <ContactEmailLayout
      contact={contact}
      preview={`Nuevo reclamo de ${contact.fullName}`}
      title="Nuevo reclamo recibido"
      intro="Ingresó un reclamo desde el formulario de contacto de MK Cars. Revisá el mensaje y determiná cómo proceder."
    >
      <Section
        style={{
          backgroundColor: "#fff7ed",
          border: "1px solid #fed7aa",
          borderRadius: "10px",
          padding: "18px",
        }}
      >
        <Text
          style={{
            color: "#9a3412",
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Mensaje del cliente
        </Text>

        <Heading as="h2" style={{ color: "#7c2d12", fontSize: "18px" }}>
          Descripción del reclamo
        </Heading>

        <Text
          style={{
            color: "#7c2d12",
            fontSize: "14px",
            lineHeight: "23px",
            whiteSpace: "pre-wrap",
            overflowWrap: "anywhere",
          }}
        >
          {contact.text}
        </Text>
      </Section>

      <Text style={{ color: "#52525b", fontSize: "13px", lineHeight: "22px" }}>
        Próximo paso sugerido: evaluar el reclamo y contactar al cliente para
        dar seguimiento.
      </Text>
    </ContactEmailLayout>
  );
}
