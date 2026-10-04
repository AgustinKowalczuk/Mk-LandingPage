const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-10">
      <main className="w-full px-4 sm:px-6 lg:px-20">
        <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Imagen */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/hero/hero-car.jpg"
              alt="Taller de chapa y pintura"
              className="w-full aspect-4/3 object-cover rounded-lg"
            />
          </div>

          {/* Contenido */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <span className="text-sm font-semibold uppercase tracking-widest">
              Nuestra historia
            </span>

            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
              Más de 25 años de trayectoria
            </h2>

            <hr className="my-5" />

            <p className="text-lg leading-relaxed">
              Somos una empresa familiar fundada por{" "}
              <strong>Manuel Kowalczuk</strong>, con más de{" "}
              <strong className="text-amber-200 border-b">25 años</strong> de trayectoria
              en el rubro de chapa, pintura y estética vehicular.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Desde nuestros comienzos trabajamos con el compromiso de brindar
              un servicio basado en la{" "}
              <strong>calidad, la confianza y la atención personalizada</strong>
              , valores que continúan siendo parte fundamental de nuestra forma
              de trabajar.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Realizamos trabajos de{" "}
              <strong>
                chapa, pintura, reparación de golpes, restauración, desarme y
                armado, reparación y colocación de paragolpes, accesorios y
                autopartes
              </strong>
              . También ofrecemos servicios de lavado de interiores y
              tratamientos estéticos, como pulido y renovación de ópticas y
              acrílicos.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Trabajamos con{" "}
              <strong>autos, camionetas, utilitarios y motocicletas</strong>,
              atendiendo a particulares, empresas, concesionarias y compañías de
              seguros en trabajos puntuales.
            </p>

            <blockquote className="mt-8 border-l-4 pl-5 italic">
              <p className="text-xl font-medium">
                “El vehículo del cliente recibe el trato como si fuera de uno
                propio.”
              </p>

              <footer className="mt-2 text-sm not-italic">
                — Manuel Kowalczuk, fundador
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
