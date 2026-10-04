export const workshop = {
  name: process.env.NEXT_PUBLIC_WORKSHOP_NAME,
  whatsapp: process.env.NEXT_PUBLIC_WORKSHOP_PHONE,
  address: process.env.NEXT_PUBLIC_WORKSHOP_ADDRESS,
  message: process.env.NEXT_PUBLIC_MESSAGE_WHATSAPP,
};

export const services = [
  {
    icon: "🚗",
    title: "Chapa y reparación",
    description:
      "Reparamos golpes, abolladuras y daños en distintas partes de la carrocería.",
    items: [
      "Reparación de golpes",
      "Trabajos de chapa",
      "Paragolpes",
      "Desarme y armado",
    ],
  },
  {
    icon: "🎨",
    title: "Pintura automotriz",
    description:
      "Recuperamos el aspecto de tu vehículo con trabajos de pintura y restauración.",
    items: [
      "Pintura de piezas",
      "Reparación de pintura",
      "Restauración",
    ],
  },
  {
    icon: "✨",
    title: "Estética automotriz",
    description:
      "Detalles que ayudan a recuperar la apariencia y el cuidado de tu vehículo.",
    items: [
      "Pulido",
      "Renovación de ópticas",
      "Lavado de interiores",
      "Detalles estéticos",
      "Renovacion de plasticos"
    ],
  }
]