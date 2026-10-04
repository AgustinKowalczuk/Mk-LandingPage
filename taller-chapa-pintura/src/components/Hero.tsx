import { workshop } from "@/data/workshop";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
const ilustrativeImg = "/images/hero/hero-car.jpg";

const Hero = ({
  setNavigateTo,
}: {
  setNavigateTo: Dispatch<SetStateAction<string>>;
}) => {
  const links = {
    servicesLink: "/#servicios",
    whatsapp: `https://wa.me/${workshop.whatsapp}`,
  };

  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ilustrativeImg}
          alt="Trabajo de pulido y estética automotriz"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        <main className="max-w-2xl text-white">
          {/* Experience */}
          <span className="mb-5 inline-block rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Más de 25 años de experiencia
          </span>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Devolvemos a tu vehículo
            <span className="block text-yellow-400">su mejor versión.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            Soluciones profesionales de chapa, pintura y estética automotriz,
            con atención personalizada en cada trabajo.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-yellow-500 px-7 py-3 text-center font-bold text-gray-950 transition hover:bg-yellow-400"
            >
              Consultar por WhatsApp
            </a>

            <Link
              href={links.servicesLink}
              onClick={()=>{
                setNavigateTo("/#servicios")
              }}
              className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Ver servicios
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            <span>✓ Experiencia</span>
            <span>✓ Atención personalizada</span>
            <span>✓ Calidad en cada trabajo</span>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
