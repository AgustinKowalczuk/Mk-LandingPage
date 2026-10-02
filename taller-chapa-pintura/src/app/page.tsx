"use client";
import config from "@/config/enviroments";
import WhatsAppButton from "@/components/WppButton";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import renderContent from "@/utils";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [navigateTo, setNavigateTo] = useState("/");
  const [heroVisible, setHeroVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setHeroVisible(false);
    } else {
      setHeroVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("Home isOpen state:", isOpen);
    console.log("Home navigateTo state:", navigateTo);
  }, [isOpen, navigateTo]);

  return (
    <main>
      <header className="w-full">
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setNavigateTo={setNavigateTo}
        />
      </header>
      
      {heroVisible && navigateTo === "/" && <Hero />}

      {renderContent(navigateTo)}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
