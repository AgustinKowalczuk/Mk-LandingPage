"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar({
  isOpen,
  setIsOpen,
  setNavigateTo,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setNavigateTo: Dispatch<SetStateAction<string>>;
}) {
  const [activeLink, setActiveLink] = useState(usePathname() || "/");

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Contacto", href: "/#contacto" },
  ];

  const navigateTo = (href: string) => {
    setActiveLink(href);
    setNavigateTo(href);
    // setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 flex flex-col sm:flex-row justify-between items-center w-full">
      {/* LOGO */}
      <section className="p-3 rounded-md flex items-center justify-between w-full sm:w-auto">
        <Link
          href="/"
          className="flex items-center md:gap-5 lg:w-xl "
          onClick={() => {
            setActiveLink("/");
            setNavigateTo("/");
            navigateTo("/");
          }}
        >
          <h1 className="text-xl text-amber-50 font-bold sm:hidden">MK Cars</h1>

          <img
            src="/icons/Logo.jpg"
            alt="Logo"
            className="w-24 h-24 rounded-2xl sm:block hidden"
          />

          <h2 className="sm:block hidden text-amber-50 text-3xl font-bold">
            MK Cars
          </h2>
        </Link>

        {/* MOBILE MENU */}
        <button
          className="sm:hidden text-gray-700 p-2"
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
        className={`flex flex-col mr-4 sm:justify-end w-full sm:flex-row ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        {links.map((link) => {
          const isActive = activeLink === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => {
                  navigateTo(link.href);
                }}
                className={`block px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-yellow-500 font-semibold border-b-2 border-yellow-500"
                    : "text-amber-50 hover:text-yellow-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
