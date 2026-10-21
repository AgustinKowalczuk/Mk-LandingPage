# MK Cars — Landing Page

A responsive landing page for **MK Cars**, an automotive bodywork and paint shop located in Villa Carlos Paz, Córdoba, Argentina. The website presents the shop's services, location and contact information, and provides direct ways for customers to get in touch.

**Status:** MVP v1  
**Live demo:** https://mk-cars.vercel.app/  
**Repository:** https://github.com/AgustinKowalczuk/Mk-LandingPage

> The gallery currently uses illustrative images. They do not necessarily depict work performed by MK Cars and will be replaced with real shop photos when available.

## Features

- Single-page, responsive layout for mobile, tablet and desktop.
- Section navigation: home, services, gallery, about, location and contact.
- Overview of the shop's services.
- Visual gallery organized by service category.
- Location information and an external Google Maps link.
- Direct WhatsApp contact with a prefilled message.
- Contact form with conditional fields for quote requests.
- Email notifications sent through Resend using React Email templates.
- Server-side input validation, a honeypot field and request rate limiting to reduce spam.

## Tech stack

- [Next.js](https://nextjs.org/) 16 — App Router and Route Handlers.
- [React](https://react.dev/) 19.
- [TypeScript](https://www.typescriptlang.org/).
- [Tailwind CSS](https://tailwindcss.com/) 4.
- [Resend](https://resend.com/) and [React Email](https://react.email/) for email notifications.
- [Upstash Redis](https://upstash.com/) and `@upstash/ratelimit` for contact-form rate limiting.
- [Vercel](https://vercel.com/) for deployment.

## Project structure

The Next.js application lives inside `taller-chapa-pintura/`.

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

## Requirements

- A Node.js version compatible with the project's Next.js version.
- npm.
- Resend and Upstash Redis credentials to enable email delivery and rate limiting in the target environment.

## Local setup

From the repository root:

```bash
cd taller-chapa-pintura
npm install
```

Create a `.env.local` file inside `taller-chapa-pintura/` and configure the variables listed below. Then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Set these variables in `.env.local` for local development and in your deployment environment settings for production.

| Variable | Purpose | Exposure |
|---|---|---|
| `NEXT_PUBLIC_WORKSHOP_PHONE` | Public shop phone number, if used by the UI. | Client |
| `NEXT_PUBLIC_MESSAGE_WHATSAPP` | Prefilled message for the WhatsApp link. | Client |
| `NEXT_PUBLIC_ADDRESS_URL_LOCAL` | Public URL used to open the location in Maps. | Client |
| `RESEND_API_KEY` | Resend API key for sending email. | Server only |
| `EMAIL_FROM` | Sender address configured/authorized in Resend. | Server only |
| `CONTACT_EMAIL` | Recipient address for contact-form submissions. | Server only |
| `UPSTASH_REDIS_REST_URL` | REST URL for the Redis database used by the rate limiter. | Server only |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token. | Server only |

Example `.env.local` (replace the empty values with your own):

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

**Security notes:**
- Never commit `.env.local` or real credentials to the repository.
- Do not add the `NEXT_PUBLIC_` prefix to private keys such as `RESEND_API_KEY` or `UPSTASH_REDIS_REST_TOKEN`.
- `API_KEY_GOOGLE_MAPS` exists in the project configuration, but the current location experience uses a Maps link. Do not configure a Google Maps API key unless the code actually needs it.
- Public environment variables are bundled into client-side code and must only contain values that are safe to expose.

## Contact form

The form sends a `POST` request to `/api/contact`. The server validates the submitted fields, assigns urgency based on the selected subject and chooses an email template for the configured categories. Emails are sent through Resend.

Requests are limited to **5 per IP every 10 minutes** using Upstash Rate Limit. A honeypot field provides an additional basic bot check. Rate limiting requires valid Upstash environment variables.

Quote requests require a national ID (DNI) and a preferred date to arrange a visit. The selected date is a preference, not an automatically confirmed appointment. The MVP does not include a synchronized calendar, database or admin dashboard.

## Available scripts

Run these commands from `taller-chapa-pintura/`:

```bash
npm run dev    # start the local development server
npm run build  # create a production build
npm run start  # run the production server locally
npm run lint   # run ESLint
```

Before deploying changes, it is recommended to run `npm run lint` and `npm run build`.

## Deployment

The project is ready to be deployed on Vercel. Since the application lives in `taller-chapa-pintura/`, set that folder as the project's **Root Directory** in Vercel if deploying from this repository. Add the required production environment variables and redeploy after changing them.

Email delivery depends on the Resend account configuration and its sending restrictions, including the applicable verified sender/domain.

## MVP v1 scope

### Included

- Responsive presentation of the shop and its services.
- Section-based navigation.
- Illustrative gallery.
- Location information and Maps link.
- Direct WhatsApp contact.
- Contact form processed through an email API.
- Input validation and basic automated-submission protections.

### Not included yet

- Persistent customer or inquiry database.
- Authentication or user roles.
- Admin dashboard.
- Real-time appointment availability.
- Automatic appointment confirmations.
- CMS for managing services or images.
- Real photos for all gallery items.

## Potential next improvements

- Replace illustrative images with approved photos of actual work.
- Add automated tests for the contact API and its validation rules.
- Add production monitoring and error logging.
- Improve metadata, Open Graph tags and local SEO.
- Add a privacy policy appropriate for the data collected by the contact form.

## Author

Developed by [Agustin Kowalczuk](https://github.com/AgustinKowalczuk).

---

[Leer este README en español](README.md)
