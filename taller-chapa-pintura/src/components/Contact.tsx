"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type ContactFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  text: string;
  asunto: string;
  DNI: string;
  date: string;
};

const INITIAL_FORM: ContactFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  text: "",
  asunto: "presupuesto",
  DNI: "",
  date: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const isBudget = form.asunto === "presupuesto";

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const payload = {
        fullName: form.fullName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        text: form.text,
        asunto: form.asunto,
        ...(isBudget ? { DNI: form.DNI, date: form.date } : {}),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        const fieldErrors = result.fields
          ? Object.values(result.fields as Record<string, string>).join(" ")
          : "";

        throw new Error(
          fieldErrors || result.error || "No se pudo enviar la consulta.",
        );
      }

      setStatus({
        type: "success",
        message: "¡Consulta enviada! Nos pondremos en contacto con vos.",
      });

      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrió un error. Intentá nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400";

  const labelClass = "mb-2 block text-sm font-medium text-neutral-200";

  return (
    <section
      id="contacto"
      className="flex min-h-screen w-full items-center justify-center bg-neutral-950 px-4 py-16 text-white sm:px-6"
    >
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            MK Cars
          </span>

          <h2 className="text-3xl font-bold sm:text-4xl">Contactanos</h2>

          <p className="max-w-xl text-neutral-400">
            Contanos qué necesitás y nos pondremos en contacto con vos.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-xl sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex min-w-0 flex-1 flex-col">
              <label className={labelClass} htmlFor="fullName">
                Nombre completo
              </label>
              <input
                className={inputClass}
                id="fullName"
                name="fullName"
                autoComplete="name"
                value={form.fullName}
                onChange={handleChange}
                minLength={2}
                maxLength={100}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <label className={labelClass} htmlFor="phoneNumber">
                Teléfono
              </label>
              <input
                className={inputClass}
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                value={form.phoneNumber}
                onChange={handleChange}
                maxLength={30}
                required
                placeholder="+54 9 ..."
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass} htmlFor="email">
              Correo electrónico
            </label>
            <input
              className={inputClass}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              maxLength={254}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="flex flex-col">
            <label className={labelClass} htmlFor="asunto">
              ¿En qué podemos ayudarte?
            </label>
            <select
              className={inputClass}
              id="asunto"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              required
            >
              <option value="presupuesto">Presupuesto</option>
              <option value="restauracion">Restauración</option>
              <option value="garantia del trabajo">Garantía del trabajo</option>
              <option value="reclamos en general">Reclamos en general</option>
            </select>
          </div>

          {isBudget && (
            <div className="flex flex-col gap-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4 sm:p-5">
              <p className="text-sm leading-6 text-neutral-300">
                Para solicitar un presupuesto, completá tus datos para coordinar
                una visita. La fecha es una preferencia, no una confirmación del
                turno.
              </p>

              <div className="flex flex-col">
                <label className={labelClass} htmlFor="DNI">
                  DNI
                </label>
                <input
                  className={inputClass}
                  id="DNI"
                  name="DNI"
                  inputMode="numeric"
                  autoComplete="off"
                  value={form.DNI}
                  onChange={handleChange}
                  maxLength={20}
                  required
                  placeholder="Tu número de DNI"
                />
              </div>

              <div className="flex flex-col">
                <label className={labelClass} htmlFor="date">
                  Fecha preferida para el turno
                </label>
                <input
                  className={inputClass}
                  id="date"
                  name="date"
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <label className={labelClass} htmlFor="text">
              Mensaje
            </label>
            <textarea
              className={`${inputClass} min-h-36 resize-y`}
              id="text"
              name="text"
              value={form.text}
              onChange={handleChange}
              minLength={5}
              maxLength={5000}
              required
              placeholder="Describí el trabajo o la consulta que necesitás..."
            />
            <span className="mt-2 text-right text-xs text-neutral-500">
              {form.text.length}/5000
            </span>
          </div>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className={`rounded-xl border p-4 text-sm ${
                status.type === "success"
                  ? "border-green-800 bg-green-950/40 text-green-300"
                  : "border-red-800 bg-red-950/40 text-red-300"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-neutral-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Enviando consulta..." : "Enviar consulta"}
          </button>

          <p className="text-center text-xs leading-5 text-neutral-500">
            Tus datos se utilizarán para responder a tu consulta.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
