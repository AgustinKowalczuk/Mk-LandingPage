const ilustrativeImg = "/images/hero/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-gray-950 sm:pt-15">
      
      <div className="absolute inset-0">
        <img
          src={ilustrativeImg}
          alt="Profesional realizando pulido automotriz"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        
        <main className="max-w-2xl text-white">
          
          <span className="mb-4 inline-block rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Chapa y pintura
          </span>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Devolvemos a tu vehículo
            <span className="block text-yellow-400">
              su mejor versión.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            Trabajamos cada vehículo con dedicación y precisión,
            ofreciendo soluciones profesionales de chapa, pintura
            y estética automotriz.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            
            <a
              href="#contacto"
              className="rounded-lg bg-yellow-500 px-7 py-3 text-center font-bold text-gray-950 transition hover:bg-yellow-400"
            >
              Solicitar presupuesto
            </a>

            <a
              href="#servicios"
              className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Ver servicios
            </a>

          </div>

        </main>
      </div>
    </section>
  );
};

export default Hero;