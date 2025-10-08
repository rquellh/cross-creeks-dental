# Cross Creeks Dental Website

Modern, mobile-responsive website for Cross Creeks Dental, a dental practice located in Pickerington, OH. Built with Astro and React, featuring automated Google Reviews integration and deployed to GitHub Pages.

## Features

- **Multiple Pages**: Home, Services, Team, Contact, Insurance, and Payments
- **Google Reviews Integration**: Automatically fetches and displays Google reviews
- **Before/After Gallery**: Showcases dental work with before/after comparisons
- **Services Carousel**: Interactive service showcase using Flickity
- **Mobile Responsive**: Fully optimized for all device sizes
- **Automated Deployments**: CI/CD with GitHub Actions
- **Weekly Review Updates**: Automated weekly refresh of Google reviews

## Tech Stack

- **[Astro](https://astro.build)** 5.14.1 - Static site framework
- **[React](https://react.dev)** 19.2 - Interactive components
- **[Tailwind CSS](https://tailwindcss.com)** 4.1 - Styling
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Flickity](https://flickity.metafizzy.co/)** - Carousel functionality
- **[Google Places API](https://developers.google.com/maps/documentation/places/web-service)** - Reviews integration
- **[Lucide React](https://lucide.dev/)** - Icons

## Project Structure

```text
/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── public/                 # Static assets (images, PDFs, favicon, etc.)
├── scripts/                # Build-time scripts (Google Reviews fetcher)
├── src/
│   ├── assets/            # Optimized image assets
│   ├── components/        # Reusable React and Astro components
│   ├── data/              # JSON data files (reviews, services, team info)
│   ├── layouts/           # Page layout templates
│   ├── pages/             # File-based routing (each file = route)
│   └── styles/            # Global CSS styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Setup

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
```sh
git clone https://github.com/rquellh/cross-creeks-dental.git
cd cross-creeks-dental
```

2. Install dependencies:
```sh
npm install
```

3. Create environment file:
```sh
cp .env.example .env
```

4. Configure environment variables in `.env`:
   - `GOOGLE_PLACES_API_KEY`: Get from [Google Cloud Console](https://console.cloud.google.com/)
   - `GOOGLE_PLACE_ID`: Find using [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

See [.env.example](.env.example) for detailed setup instructions.

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run fetch-reviews`   | Manually fetch Google reviews                    |
| `npm run build`           | Build production site to `./dist/` (includes review fetch) |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

The site is deployed to GitHub Pages at: https://rquellh.github.io/cross-creeks-dental

### Automated Deployments

1. **On Push to Main**: Automatically builds and deploys via [deploy.yml](.github/workflows/deploy.yml)
2. **Weekly Reviews Update**: Runs every Sunday at 12:00 AM EST via [update-reviews.yml](.github/workflows/update-reviews.yml)

### GitHub Secrets Required

Add these secrets in your repository settings (Settings > Secrets and variables > Actions):
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`

### Manual Deployment

Trigger workflows manually from the Actions tab in GitHub.

## License

Copyright (C) Q Investments & Realty 2025. All Rights Reserved.

Copyright laws and international treaties protect this app. Unauthorized redistribution, reproduction, modification, or appropriation of this app, including its designs, assets, code, or any component thereof, without express written permission from our legal department may entail severe civil or criminal penalties.
