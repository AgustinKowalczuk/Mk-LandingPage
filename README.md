# Mk-LandingPage

TALLER
CHAPA & PINTURA

---

### V1 Landing Page presentación

```
Next.js
   │
   ├── React
   ├── TypeScript
   ├── Tailwind CSS
   └── Responsive Design
```

| Funcionalidad           | MVP |
| ----------------------- | --: |
| Landing responsive      |  ✅ |
| Header / navegación     |  ✅ |
| Hero                    |  ✅ |
| Sobre nosotros          |  ✅ |
| Servicios               |  ✅ |
| Galería de trabajos     |  ✅ |
| Ubicación               |  ✅ |
| Google Maps             |  ✅ |
| Información de contacto |  ✅ |
| WhatsApp gerente        |  ✅ |
| Mensaje precargado      |  ✅ |
| Footer                  |  ✅ |
| Backend                 |  ❌ |
| Base de datos           |  ❌ |
| Login                   |  ❌ |
| Gestión de turnos       |  ❌ |

---

## Architecture

```
taller-chapa-pintura/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── gallery/
│   │
│   └── logo.png
│
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   ├── Location.tsx
│   │   ├── Contact.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   └── workshop.ts
│   │
│   └── types/
│       └── workshop.ts
│
├── package.json
└── ...
```

---

### V2, si posteriormente el taller quiere crecer

Podrías convertirlo en algo mucho más interesante:

```
    Landing
    │
    ├── WhatsApp
    │
    └── Solicitud de turno
                   │
                   ▼
               Sistema de turnos
                   │
             ┌─────┴─────┐
             ▼           ▼
           Cliente      Gerente
                          │
                          ▼
                     Panel Admin
                          │
                 ┌────────┼────────┐
                 ▼        ▼        ▼
             Turnos   Clientes   Vehículos
```
