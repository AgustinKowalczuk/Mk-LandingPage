"use client";

import WhatsAppButton from "@/components/WppButton";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="scroll-smooth">
      {/* NAVBAR */}
      <header className="fixed top-0 right-0 z-50 w-full">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>

      {/* SECTIONS */}
      <div>
        <section id="home" className="min-h-svh scroll-mt-24">
          <Hero />
        </section>

        <section id="services" className="min-h-svh scroll-mt-24">
          <Services />
        </section>

        <section id="gallery" className="min-h-svh scroll-mt-14">
          <Gallery />
        </section>

        <section id="about" className="min-h-svh scroll-mt-14">
          <About />
        </section>

        <section id="location" className="min-h-svh scroll-mt-24">
          <Location />
        </section>

        <section id="contacto" className="min-h-svh scroll-mt-14">
          <Contact />
        </section>
      </div>

      <WhatsAppButton />

      <Footer />
    </main>
  );
}
