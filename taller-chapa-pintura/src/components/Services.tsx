import { services } from "@/data/workshop";
const Services = () => {
  return (
    <section
      id="servicios"
      className="bg-gray-100 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl pt-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center ">
          <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
            Nuestros servicios
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-950 sm:text-5xl">
            Todo lo que tu vehículo necesita.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Soluciones profesionales de chapa, pintura y estética automotriz
            para devolverle a tu vehículo su mejor aspecto.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/15 text-3xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-gray-950">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Items */}
              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="text-yellow-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            ¿No estás seguro de qué servicio necesitás?
          </p>

          <a
            href="https://wa.me/TUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-yellow-500 px-7 py-3 font-bold text-gray-950 transition hover:bg-yellow-400"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
