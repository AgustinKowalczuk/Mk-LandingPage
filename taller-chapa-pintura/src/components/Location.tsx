import config from "@/config/enviroments";

const Location = () => {
  const address = "Las Malvinas 83, Villa Carlos Paz, Córdoba, Argentina";

  const mapsUrl = config.ADDRESS_URL_LOCAL;

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:flex-row lg:items-stretch">
        {/* =========================
            INFORMACIÓN
        ========================= */}
        <div className="flex w-full flex-col justify-center rounded-3xl border border-neutral-800 bg-neutral-900/60 p-7 shadow-xl sm:p-9 lg:w-[40%] lg:p-10">
          {/* Label */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Encontranos
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Estamos cerca
              <span className="block text-yellow-400">de vos.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg">
              Visitá nuestro taller en Villa Carlos Paz y consultanos por tu
              vehículo. Estamos para ayudarte.
            </p>
          </div>

          {/* Información */}
          <div className="mt-8 flex flex-col gap-6">
            {/* Dirección */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-xl text-yellow-400">
                📍
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-white">Dirección</h3>

                <p className="mt-1 text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {address}
                </p>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-xl text-yellow-400">
                🕐
              </div>

              <div className="w-full">
                <h3 className="font-semibold text-white">Horarios</h3>
                <div className="flex justify-around w-full">
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400 sm:text-base">
                    Lunes a viernes
                    <br />
                    08:00 — 13:00
                    <br />
                    15:00 — 18:00
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400 sm:text-base">
                    Sabado
                    <br />
                    08:00 — 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-7 py-3.5 font-bold text-neutral-950 transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 sm:w-auto"
            >
              Cómo llegar
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* =========================
            MAPA
        ========================= */}
        <div className="flex w-full flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl lg:w-[60%]">
          {/* Header del mapa */}
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-800 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">
                Nuestra ubicación
              </p>

              <p className="mt-0.5 truncate text-xs text-neutral-500">
                Las Malvinas 83 · Villa Carlos Paz
              </p>
            </div>

            <div className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-sm text-yellow-400">
              📍
            </div>
          </div>

          {/* Mapa */}
          <div className="relative h-87.5 w-full sm:h-112.5 lg:h-auto lg:min-h-137.5 lg:flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.925415098036!2d-64.50454223272708!3d-31.442180271769004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d67c9e25581d5%3A0x7c06ec1bbe922cb7!2sMK%20-%20Car!5e0!3m2!1ses!2sar!4v1791425804216!5m2!1ses!2sar"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación de MK - Car en Villa Carlos Paz"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
