import { galleryItems } from "@/config/images-gallery";

const Gallery = () => {
  return (
    <section
      id="galeria"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-12 lg:py-24"
    >
      <div className="flex w-full max-w-6xl flex-col">
        {/* Encabezado */}
        <header className="mb-12 flex flex-col items-center text-center sm:mb-14">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-8 bg-neutral-500" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Galería
            </span>
            <span className="h-px w-8 bg-neutral-500" />
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            Conocé los trabajos y servicios que ofrecemos para cuidar, reparar y
            renovar tu vehículo.
          </p>
        </header>

        {/* Tarjetas */}
        <div className="flex flex-wrap gap-5 lg:gap-6">
          {galleryItems.map((item) => (
            <article
              key={item.number}
              className="group flex w-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-xl hover:shadow-black/30 sm:w-[calc(50%-0.625rem)] lg:w-[calc(50%-0.75rem)]"
            >
              {/* Imagen */}
              <div className="relative h-56 w-full overflow-hidden sm:h-60 lg:h-64">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />

                <span className="absolute right-4 top-4 rounded-md border border-white/20 bg-black/50 px-3 py-1 text-sm font-bold text-yellow-400 backdrop-blur-sm">
                  {item.number}
                </span>
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
                <h3 className="text-xl font-bold transition-colors group-hover:text-yellow-400 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400 sm:text-base">
                  {item.description}
                </p>

                <span className="mt-5 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>

        {/* Aviso de imágenes ilustrativas */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-yellow-400 text-sm font-bold text-yellow-400">
            i
          </span>

          <p className="max-w-2xl text-xs leading-6 text-neutral-500 sm:text-sm">
            Las imágenes son ilustrativas y no representan trabajos realizados
            por MK Cars. Próximamente incorporaremos fotografías reales de
            nuestros trabajos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
