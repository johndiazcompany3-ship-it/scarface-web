# Scarface Restaurante Ávila — Landing Page PRD

## Original Problem Statement
Cinematic, premium, Apple-AirPods/Sony-Bravia-style landing page for "Scarface Restaurante Ávila" (Spanish/Mexican fusion restaurant). Single-page, es-ES. Hero features a scroll-scrub canvas that plays a frame sequence synced with scroll position. Editorial dark theme, liquid-glass UI, Bebas Neue + DM Sans. WhatsApp integration (floating btn, hero CTA, mobile sticky bar). Original stack spec: Vite + React 18 + TS + Tailwind v4 (adapted to CRA + JS + Tailwind v3 to match platform).

## Architecture
- Frontend-only (no backend/MongoDB needed)
- Stack: CRA + React 19 + Tailwind v3 + framer-motion + lucide-react + @fontsource
- Scroll-scrub: Canvas 2D with requestAnimationFrame, preloaded Image[], index computed from scrollTargetRef.getBoundingClientRect()
- Assets: 30 curated JPGs in /public/frames (15MB total, ~500KB each)

## User Personas
- **Cliente local Ávila**: busca reservar mesa o ver carta desde móvil.
- **Turista**: descubre el restaurante por Google/TheFork, quiere ver fotos y ubicación.
- **Grupo/eventos**: quiere contacto rápido por WhatsApp o teléfono.

## Core Requirements (static)
- 100% mobile-first, responsive 375–1920px
- WhatsApp +34623513639 en CTAs principales, teléfono 623 513 639
- Dirección: Calle Enrique Larreta, 7 — Ávila
- Idioma: español (es-ES)
- Sin backend, sin formularios

## What's Been Implemented (2026-04-23)
- Navbar pill flotante liquid-glass (desktop + drawer móvil)
- Hero 250vh con scroll-scrub canvas (30 frames)
- Headline "SABOR. SIN CONCESIONES." con BlurText animation
- Marquee partners (4,4★ Google, 8/10 TheFork, Glovo, etc.)
- Carta con 4 categorías (Compartir, Tacos, Brasa, Dulces) y precios
- Menú del Día (13,90€) con primeros+segundos y horario
- Galería 8 imágenes (reutiliza frames)
- Stats 4 tiles con métricas
- Testimonials 3 reseñas con 5 estrellas
- FAQ accordion con 6 preguntas típicas de restaurante
- CTA Footer con dirección/tel/email/horario + final CTA
- WhatsApp floating button con ping + tooltip (bottom-right)
- Mobile sticky bar Llamar + WhatsApp (solo <768px)
- Test coverage 100% frontend (iteration_1.json)

## Prioritized Backlog
### P1
- Vídeo real del restaurante extraído en 120 frames (reemplazar stock Unsplash)
- Logo SVG propio (actual: tipográfico)
- Integración TheFork widget para reservas directas
- Sección de equipo/chef con foto
### P2
- Sistema i18n para versión en inglés
- Integración Google Reviews API para mostrar reseñas reales en tiempo real
- Reservas online integradas (TheFork API, Google Reserve, o CoverManager)
- Instagram feed embebido
- OpenGraph meta tags + JSON-LD Restaurant schema

## Next Tasks
1. Reemplazar los 30 frames con vídeo real del local (ver instrucciones ffmpeg en README)
2. Subir logo.svg oficial
3. Añadir meta tags SEO + Open Graph en public/index.html
4. Integración Google Maps embebido en sección Contacto
