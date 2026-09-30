import { workshop } from "@/data/workshop";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    workshop.message || "Hola! Me gustaría obtener más información sobre sus servicios de taller de chapa y pintura. ¿Podrían proporcionarme detalles sobre los servicios que ofrecen, los precios y la disponibilidad? ¡Gracias!"
  );

  return (
    <a
      href={`https://wa.me/${workshop.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
    >
        <button className="fixed bottom-4 right-4 bg-green-500 text-white p-1 rounded-full shadow-lg hover:bg-green-600 transition-colors">
            <img src="https://cdn-icons-png.flaticon.com/512/12635/12635043.png" alt="WhatsApp" className="w-10 h-10" />
        </button>
    </a>
  );
}