# Karnsinh Jadhav — Portfolio

A responsive, static HTML/CSS/JavaScript portfolio that retains the visual language of the supplied `src.zip` project: near-black surfaces, restrained indigo accents, Inter typography, fine borders, subtle noise and editorial spacing. It is intentionally dependency-free at runtime and compatible with GitHub Pages.

## Project structure

```text
karnsinh-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── favicon.svg
    └── resume.pdf   (add your own file)
```

## Before publishing

1. Replace `YOUR_EMAIL@example.com` in `index.html` with the email address you want public.
2. Add your actual résumé PDF at `assets/resume.pdf`. The download link is already wired to that path.
3. If you want a real headshot, replace the abstract initials-based profile artwork in the hero with a properly licensed/owned portrait and meaningful alt text.
4. Confirm all project descriptions, external URLs and social profiles are still current.

No email address, phone number, photo, chess rating, performance metric or project deployment URL has been invented or exposed. The hero portrait is an intentional abstract placeholder.

## Run locally

Open `index.html` in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Copy the contents of this folder into the root of the repository `KarnJadhav/KarnJadhav.github.io` (or the repository currently publishing `https://karnjadhav.github.io/`).
2. Commit and push to the branch configured for GitHub Pages.
3. In GitHub, open **Settings → Pages** and select **Deploy from a branch**, then choose the publishing branch and `/ (root)`.
4. Wait for the Pages deployment to finish, then verify `https://karnjadhav.github.io/`.

The site is plain static files: no Node build, server runtime, environment variables or custom domain are required.

## Notes on source reconciliation

The supplied Next.js `src.zip` contains a dark monochrome/indigo design system, but its content/configuration differs from the separately supplied `index.html` and the latest brief. This rebuild keeps the visual theme while treating the latest brief as the content authority. Older conflicting claims in the archive (including alternate LinkedIn URL, email/phone, project metrics, project live links, and extra claims) were not carried over.

## Quality checks performed

- Semantic landmarks and heading hierarchy.
- Responsive CSS breakpoints for desktop, tablet and mobile.
- Keyboard-operable mobile navigation, Escape-to-close, skip link and visible focus.
- Reduced-motion preference support.
- External links use `rel="noopener noreferrer"`.
- Canonical, Open Graph, Twitter and Schema.org ProfilePage/Person metadata.
- Local fragment links and referenced local assets checked in source.
