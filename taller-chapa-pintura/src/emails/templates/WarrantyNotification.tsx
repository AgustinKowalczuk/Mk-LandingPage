
import { Heading, Section, Text } from "@react-email/components";
import ContactEmailLayout from "./ContactEmailLayout";
import type { ContactEmailData } from "@/emails/types";

export default function WarrantyNotification({
  contact,
}: {
  contact: ContactEmailData;
}) {
  return (
    <ContactEmailLayout
      contact={contact}
      preview={`Consulta de garantía de ${contact.fullName}`}
      title="Consulta sobre garantía"
      intro="Un cliente se comunicó por una cuestión relacionada con la garantía de un trabajo."
    >
      <Section
        style={{
          backgroundColor: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "10px",
          padding: "18px",
        }}
      >
        <Heading as="h2" style={{ color: "#991b1b", fontSize: "18px" }}>
          Motivo de la consulta
        </Heading>

        <Text
          style={{
            color: "#7f1d1d",
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
        Próximo paso sugerido: revisar los antecedentes del trabajo y
        coordinar con el cliente la evaluación del inconveniente.
      </Text>
    </ContactEmailLayout>
  );
}
