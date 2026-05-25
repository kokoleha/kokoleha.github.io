# Aleksei Kokorin — Portfolio Site

Personal portfolio and landing page for Aleksei Kokorin, Lead AWS Solutions Architect.

## Features

- Single-page responsive design with dark theme
- Bilingual content (English / Russian) with client-side switching
- Sections: Hero, About, Skills & Certifications, Experience Timeline, Projects, Contact
- Scroll animations via Intersection Observer
- Contact form powered by Formspree
- Projects loaded dynamically from JSON data file
- SEO and Open Graph meta tags

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, flexbox/grid, animations)
- Vanilla JavaScript (no frameworks, no build step)

## Project Structure

```
portfolio-site/
├── index.html          # Single-page entry point
├── css/
│   └── style.css       # All styles with CSS custom properties
├── js/
│   ├── i18n.js         # Internationalization (EN/RU)
│   ├── projects.js     # Dynamic project card rendering
│   └── main.js         # Navigation, animations, form handling
├── data/
│   └── projects.json   # Project entries (bilingual)
├── assets/
│   ├── photo.png       # Profile photo
│   └── icons/          # Certification badge SVGs
├── .gitignore
└── README.md
```

## Deployment (GitHub Pages)

1. Push this directory to a GitHub repository (e.g., `username/portfolio`).
2. Go to **Settings → Pages** in the repository.
3. Under **Source**, select the branch (e.g., `main`) and root folder (`/`).
4. Click **Save**. The site will be live at `https://username.github.io/portfolio/`.

No build step required — GitHub Pages serves the static files directly.

## Local Development

Open `index.html` in a browser, or use any static file server:

```bash
# Python
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

## Adding Projects

Edit `data/projects.json` to add or update project entries. No HTML or JS changes needed.

## License

All rights reserved © Aleksei Kokorin
