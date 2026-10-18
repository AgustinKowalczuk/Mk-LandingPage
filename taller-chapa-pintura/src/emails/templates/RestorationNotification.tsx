
import { Heading, Section, Text } from "@react-email/components";
import ContactEmailLayout from "./ContactEmailLayout";
import type { ContactEmailData } from "@/emails/types";

export default function RestorationNotification({
  contact,
}: {
  contact: ContactEmailData;
}) {
  return (
    <ContactEmailLayout
      contact={contact}
      preview={`Consulta de restauración de ${contact.fullName}`}
      title="Consulta sobre restauración"
      intro="Recibiste una consulta relacionada con un proyecto de restauración automotriz."
    >
      <Section
        style={{
          backgroundColor: "#f4f4f5",
          borderRadius: "10px",
          padding: "18px",
        }}
      >
        <Heading as="h2" style={{ color: "#18181b", fontSize: "18px" }}>
          Descripción del proyecto
        </Heading>

        <Text
          style={{
            color: "#52525b",
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
        Próximo paso sugerido: revisar el alcance del trabajo y contactar al
        cliente para conocer los detalles del vehículo y del proyecto.
      </Text>
    </ContactEmailLayout>
  );
}
