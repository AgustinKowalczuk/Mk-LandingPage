# MK Cars — Landing page

Landing page responsive para **MK Cars**, un taller de chapa y pintura automotriz ubicado en Villa Carlos Paz, Córdoba, Argentina. El sitio presenta los servicios del taller, su información de contacto y ubicación, y ofrece canales directos para realizar consultas.

**Estado:** MVP v1  
**Demo:** https://mk-cars.vercel.app/  
**Repositorio:** https://github.com/AgustinKowalczuk/Mk-LandingPage

> La galería utiliza imágenes ilustrativas. No representan necesariamente trabajos realizados por MK Cars; se reemplazarán por fotografías reales cuando estén disponibles.

## Funcionalidades

- Landing page de una sola página, adaptable a dispositivos móviles, tablets y escritorio.
- Navegación entre secciones: inicio, servicios, galería, nosotros, ubicación y contacto.
- Presentación de los servicios del taller.
- Galería visual organizada por categorías de servicio.
- Información de ubicación y acceso a Google Maps mediante un enlace externo.
- Acceso directo a WhatsApp con un mensaje precargado.
- Formulario de contacto con campos condicionales para solicitudes de presupuesto.
- Envío de notificaciones por correo electrónico mediante Resend y plantillas de React Email.
- Validación de datos en el servidor, campo honeypot y limitación de solicitudes para reducir el spam.

## Tecnologías

- [Next.js](https://nextjs.org/) 16 — App Router y Route Handlers.
- [React](https://react.dev/) 19.
- [TypeScript](https://www.typescriptlang.org/).
- [Tailwind CSS](https://tailwindcss.com/) 4.
- [Resend](https://resend.com/) y [React Email](https://react.email/) para notificaciones por correo.
- [Upstash Redis](https://upstash.com/) y `@upstash/ratelimit` para limitar solicitudes al formulario.
- [Vercel](https://vercel.com/) para despliegue.

## Estructura del proyecto

La aplicación Next.js se encuentra dentro de `taller-chapa-pintura/`.

```text
Mk-LandingPage/
├── README.md
├── README.en.md
└── taller-chapa-pintura/
    ├── public/
    ├── src/
    │   ├── app/
    │   │   ├── api/contact/route.ts
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components/
    │   ├── config/
    │   ├── emails/
    │   ├── lib/
    │   └── types/
    ├── package.json
    └── ...
```

## Requisitos

- Node.js compatible con la versión de Next.js del proyecto.
- npm.
- Credenciales de Resend y Upstash Redis para habilitar el envío de correos y el rate limiting en el entorno donde se ejecute la aplicación.

## Instalación y ejecución local

Desde la raíz del repositorio:

```bash
cd taller-chapa-pintura
npm install
```

Creá un archivo `.env.local` en `taller-chapa-pintura/` y configurá las variables indicadas en la siguiente sección. Después, ejecutá:

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Configurá estas variables en `.env.local` para desarrollo y en los ajustes del entorno de despliegue para producción.

| Variable | Uso | Exposición |
|---|---|---|
| `NEXT_PUBLIC_WORKSHOP_PHONE` | Teléfono público del taller, si lo consume la interfaz. | Cliente |
| `NEXT_PUBLIC_MESSAGE_WHATSAPP` | Mensaje precargado del enlace de WhatsApp. | Cliente |
| `NEXT_PUBLIC_ADDRESS_URL_LOCAL` | URL pública para abrir la ubicación en Maps. | Cliente |
| `RESEND_API_KEY` | Clave de API para enviar correos con Resend. | Solo servidor |
| `EMAIL_FROM` | Remitente autorizado/configurado en Resend. | Solo servidor |
| `CONTACT_EMAIL` | Dirección que recibe las consultas del formulario. | Solo servidor |
| `UPSTASH_REDIS_REST_URL` | URL REST de la base Redis usada por el rate limiter. | Solo servidor |
| `UPSTASH_REDIS_REST_TOKEN` | Token REST de Upstash Redis. | Solo servidor |

Ejemplo de `.env.local` (reemplazá los valores por los tuyos):

```dotenv
NEXT_PUBLIC_WORKSHOP_PHONE=
NEXT_PUBLIC_MESSAGE_WHATSAPP=
NEXT_PUBLIC_ADDRESS_URL_LOCAL=

RESEND_API_KEY=
EMAIL_FROM=
CONTACT_EMAIL=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

**Seguridad:**
- No subas `.env.local` ni claves reales al repositorio.
- No agregues el prefijo `NEXT_PUBLIC_` a claves privadas como `RESEND_API_KEY` o `UPSTASH_REDIS_REST_TOKEN`.
- `API_KEY_GOOGLE_MAPS` está definido en la configuración del proyecto, pero la experiencia actual de ubicación se basa en un enlace a Maps; no configures una clave de Google Maps salvo que el código realmente la necesite.
- Las variables públicas se incorporan al bundle del cliente: solo deben contener valores que puedan exponerse.

## Formulario de contacto

El formulario envía una petición `POST` a `/api/contact`. El servidor valida los campos, determina la urgencia según el asunto y selecciona una plantilla de correo para las categorías configuradas. Las solicitudes se envían mediante Resend.

Las solicitudes se limitan a **5 por IP cada 10 minutos** mediante Upstash Rate Limit. También se utiliza un campo honeypot como protección básica contra bots. El rate limiting requiere que las variables de Upstash estén correctamente configuradas.

Para solicitudes de presupuesto, el formulario pide DNI y una fecha preferida para coordinar una visita. La fecha es una preferencia de contacto, no una confirmación automática de turno. El MVP no incluye agenda sincronizada, base de datos ni panel administrativo.

## Scripts disponibles

Ejecutá estos comandos desde `taller-chapa-pintura/`:

```bash
npm run dev    # servidor local de desarrollo
npm run build  # compilación de producción
npm run start  # servidor de producción local
npm run lint   # análisis estático con ESLint
```

Antes de publicar cambios, es recomendable ejecutar `npm run lint` y `npm run build`.

## Despliegue

El proyecto está preparado para desplegarse en Vercel. Si el repositorio mantiene la aplicación dentro de `taller-chapa-pintura/`, configurá esa carpeta como **Root Directory** del proyecto en Vercel. Agregá las variables de entorno necesarias para el entorno de producción y volvé a desplegar después de modificarlas.

El envío de correos depende de la configuración y las restricciones de la cuenta de Resend, incluido el remitente/dominio verificado que corresponda.

## Alcance del MVP v1

### Incluido

- Presentación responsive del taller y sus servicios.
- Navegación por secciones.
- Galería ilustrativa.
- Ubicación y acceso a Maps.
- Acceso directo a WhatsApp.
- Formulario con procesamiento de solicitudes por correo.
- Validación y protecciones básicas contra envíos automatizados.

### Fuera del alcance actual

- Base de datos persistente de clientes o consultas.
- Inicio de sesión y roles.
- Panel administrativo.
- Sistema de turnos con disponibilidad en tiempo real.
- Confirmaciones automáticas de turnos.
- CMS para gestionar servicios o imágenes.
- Fotografías reales de todos los trabajos.

## Próximas mejoras posibles

- Sustituir las imágenes ilustrativas por fotografías autorizadas de trabajos reales.
- Añadir pruebas automatizadas para la API de contacto y sus validaciones.
- Añadir monitoreo y registro de errores de producción.
- Mejorar metadatos, Open Graph y SEO local.
- Incorporar una política de privacidad acorde con el tratamiento de datos del formulario.

## Autor

Desarrollado por [Agustin Kowalczuk](https://github.com/AgustinKowalczuk).

---

[Read this README in English](README.en.md)
