# Junsheng Huang’s academic website

Personal website for Junsheng Huang, built with [Astro Academia](https://github.com/maiobarbero/astro_academia) and published at [no-touch-fish.github.io](https://no-touch-fish.github.io/).

## Local development

Install the Node.js version in `.nvmrc`, then run:

```sh
npm ci
npm run dev
```

Run `npm test`, `npm run check`, and `npm run build` to verify changes. `npm run preview` serves the static build in `dist/`.

## Editing content

- Update profile details and research interests in `src/settings.ts`.
- Edit publications and education in `src/data/cv.ts` and news in `src/data/news.ts`.
- Edit research, projects, awards, and teaching in the corresponding pages in `src/pages/`.
- Replace `public/files/CV.pdf` to update the downloadable CV.

## GitHub Pages

Select **GitHub Actions** under **Settings → Pages → Build and deployment → Source**. The Pages workflow builds the site and publishes `dist/` when changes reach `main`.

The previous layout was based on [Everloom-129](https://github.com/Everloom-129/Everloom-129.github.io) and [Junwei Liang](https://github.com/JunweiLiang/junweiliang.github.io). The Astro Academia license is in [LICENSE-ASTRO-ACADEMIA](LICENSE-ASTRO-ACADEMIA).
