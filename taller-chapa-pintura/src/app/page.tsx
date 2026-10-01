"use client";
import config from "@/config/enviroments";
import WhatsAppButton from "@/components/WppButton";
import Navbar from "@/components/Navbar";
import { useEffect,useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Home isOpen state:", isOpen);
  }, [isOpen]);


  return (
    <main>

      <header className="w-full">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>

      <section className="bg-primary text-white p-8 text-center">
        <h1>Taller de Chapa y Pintura</h1>
        <p>
          Reparación, pintura y cuidado profesional de vehículos.
        </p>

        <a
          href={`https://wa.me/${config.NEXT_PUBLIC_WORKSHOP_PHONE}?text=${config.NEXT_PUBLIC_MESSAGE_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <WhatsAppButton />
      </section>

      <section className="bg-primary text-white p-8 text-center" id="servicios">
        <h2>Nuestros servicios</h2>
      </section>

      <section className="bg-primary text-white p-8 text-center" id="nosotros">
        <h2>Sobre nosotros</h2>
      </section>

      <section className="bg-primary text-white p-8 text-center" id="trabajos">
        <h2>Trabajos realizados</h2>
      </section>

      <section className="bg-primary text-white p-8 text-center" id="ubicacion">
        <h2>Ubicación</h2>
      </section>

      <section className="bg-primary text-white p-8 text-center" id="contacto">
        <h2>Contacto</h2>
      </section>
    </main>
  );
}