"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";

export default function Navbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [activeSection, setActiveSection] = useState("home");

  const componentsSection = [
    { name: "Inicio", id: "home", href: "/#home" },
    { name: "Services", id: "services", href: "/#services" },
    { name: "Galleria", id: "gallery", href: "/#gallery" },
    { name: "Nosotros", id: "about", href: "/#about" },
    { name: "Ubicacion", id: "location", href: "/#location" },
    { name: "Contacto", id: "contacto", href: "/#contacto" },
  ];

  useEffect(() => {
    const sections = componentsSection
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-100px 0px -35% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-black flex flex-col sm:flex-row justify-between items-center w-full">
      {/* LOGO */}
      <section className="p-3 rounded-md flex items-center justify-between w-full sm:w-auto">
        <Link
          href="/#home"
          className="flex items-center md:gap-5 lg:w-xl"
          onClick={() => setIsOpen(false)}
        >
          <h1 className="text-xl text-amber-50 font-bold sm:hidden">MK Cars</h1>

          <img
            src="/icons/Logo.jpg"
            alt="Logo"
            className="w-20 h-20 rounded-2xl sm:block hidden"
          />

          <h2 className="sm:block hidden text-amber-50 text-3xl font-bold">
            MK Cars
          </h2>
        </Link>

        {/* MOBILE MENU */}
        <button
          className="sm:hidden text-amber-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </section>

      {/* NAVIGATION */}
      <ul
        className={`mr-4 w-full flex-col sm:flex-row gap-4 sm:justify-center ${
          isOpen ? "flex" : "hidden"
        } sm:flex`}
      >
        {componentsSection.map((cs) => {
          const isActive = activeSection === cs.id;

          return (
            <li key={cs.id}>
              <Link
                href={cs.href}
                onClick={() => setIsOpen(false)}
                className={`
                  relative block py-2 pl-4
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-amber-400"
                      : "text-amber-50 hover:text-amber-300"
                  }
                `}
              >
                {cs.name}

                {/* INDICADOR */}
                <span
                  className={`
                    absolute left-0 bottom-0 h-[2px]
                    bg-amber-400
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
