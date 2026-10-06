"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WppButton";
import StackSection from "@/components/StackSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [navigateTo, setNavigateTo] = useState("/");

  return (
    <main className="relative bg-neutral-950">
      {/* Navbar */}
      <header className="fixed top-0 right-0 z-50 w-full">
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setNavigateTo={setNavigateTo}
        />
      </header>

      {/* HERO */}
      <StackSection id="inicio" z={10} className="bg-neutral-950 text-white">
        <Hero setNavigateTo={setNavigateTo} />
      </StackSection>

      {/* SERVICIOS */}
      <StackSection id="servicios" z={20} className="bg-white text-neutral-950">
        <Services />
      </StackSection>

      {/* GALERÍA */}
      <StackSection
        id="galeria"
        z={40}
        stack={false}
        className="bg-white text-neutral-950"
      >
        <Gallery />
      </StackSection>

      {/* UBICACIÓN */}
      <StackSection
        id="ubicacion"
        z={50}
        stack={false}
        className="bg-neutral-950 text-white"
      >
        <Location />
      </StackSection>

      {/* CONTACTO */}
      <StackSection
        id="contacto"
        z={60}
        stack={false}
        className="bg-white text-neutral-950"
      >
        <Contact />
      </StackSection>

      
      {/* NOSOTROS */}
      <StackSection id="nosotros" z={30} className="bg-neutral-950 text-white">
        <About />
      </StackSection>


      {/* FOOTER */}
      <div className="relative z-[70] bg-neutral-950 text-white">
        <Footer />
      </div>

      <div className="z-80 absolute">
        <WhatsAppButton />
      </div>
    </main>
  );
}
