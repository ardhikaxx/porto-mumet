# Porto Mumet.in - Portfolio Website

Portfolio profesional untuk layanan pembuatan website dan aplikasi mobile.

## Fitur

- **Hero Section** - Tampilan menarik dengan Call-to-Action
- **Portfolio Projek** - Showcase projek-projek yang telah diselesaikan
- **Layanan** - Berbagai layanan pengembangan digital
- **Contact** - Tombol CTA untuk menghubungi klien
- **Dark/Light Mode** - Toggle tema gelap/terang
- **Responsive Design** - Tampilan optimal di semua perangkat
- **Optimized Performance** - Loading cepat dengan Next.js optimization

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+
- npm / yarn / pnpm

## Installation

```bash
# Clone repository
git clone https://github.com/ardhikaxx/porto-mumet.git

# Masuk ke direktori
cd porto-mumet

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

## Build for Production

```bash
# Build project
npm run build

# Jalankan production server
npm start
```

## Lint

```bash
npm run lint
```

## Struktur Folder

```
porto-app/
├── app/
│   ├── components/       # Komponen React
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ServiceIcons.tsx
│   │   └── ThemeProvider.tsx
│   ├── data/            # Data statis
│   │   ├── projects.ts
│   │   └── services.ts
│   ├── projects/[id]/   # Halaman detail projek
│   ├── globals.css      # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Halaman utama
├── public/             # Static assets
│   └── projects/       # Gambar projek
├── next.config.ts     # Next.js config
├── tailwind.config.ts # Tailwind config
└── package.json
```
