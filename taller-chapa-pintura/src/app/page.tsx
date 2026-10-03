"use client";

import WhatsAppButton from "@/components/WppButton";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import renderContent from "@/utils";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [navigateTo, setNavigateTo] = useState("/");
  const [scrollY, setScrollY] = useState(0);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroTranslate = Math.min(scrollY * 0.5, 150);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log({
      isOpen,
      navigateTo,
    });
  }, [isOpen, navigateTo]);

  return (
    <main>
      <header className="absolute top-0 left-0 z-50 w-full">
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setNavigateTo={setNavigateTo}
        />
      </header>

      <div
        style={{
          opacity: heroOpacity,
          transform: `translateY(-${heroTranslate}px)`,
        }}
        className="transition-opacity duration-100"
      >
        {navigateTo === "/" && <Hero />}
      </div>
      {renderContent(navigateTo)}

      <WhatsAppButton />

      <Footer />
    </main>
  );
}
