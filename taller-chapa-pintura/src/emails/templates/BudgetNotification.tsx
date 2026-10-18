
import { Heading, Section, Text } from "@react-email/components";
import ContactEmailLayout from "./ContactEmailLayout";
import type { ContactEmailData } from "@/emails/types";

export default function BudgetNotification({
  contact,
}: {
  contact: ContactEmailData;
}) {
  return (
    <ContactEmailLayout
      contact={contact}
      preview={`Nueva solicitud de presupuesto de ${contact.fullName}`}
      title="Nueva solicitud de presupuesto"
      intro="Un cliente quiere consultar por un trabajo en su vehículo. Revisá la información y coordiná el contacto."
    >
      <Section
        style={{
          backgroundColor: "#fffbeb",
          border: "1px solid #fde68a",
          borderRadius: "10px",
          padding: "18px",
        }}
      >
        <Text
          style={{
            color: "#92400e",
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Acción requerida
        </Text>

        <Heading
          as="h2"
          style={{ color: "#78350f", fontSize: "18px" }}
        >
          Coordinar una visita
        </Heading>

        <Text style={{ color: "#78350f", fontSize: "14px", lineHeight: "22px" }}>
          La fecha indicada es una preferencia del cliente. El turno todavía
          no está confirmado.
        </Text>

        <Text style={{ color: "#78350f", fontSize: "14px" }}>
          <strong>Fecha solicitada:</strong> {contact.date || "No indicada"}
        </Text>

        <Text style={{ color: "#78350f", fontSize: "14px" }}>
          <strong>DNI:</strong> {contact.DNI || "No indicado"}
        </Text>
      </Section>

      <Section style={{ marginTop: "24px" }}>
        <Heading as="h2" style={{ color: "#18181b", fontSize: "18px" }}>
          Trabajo solicitado
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
    </ContactEmailLayout>
  );
}
