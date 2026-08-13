# Buildform — team capability page for LinkWave JD

Vite + React + TS + Tailwind static site. Deploy anywhere (Vercel/Netlify/GH Pages).

## Input assets (NOT tracked in git)
Drop CVs, photos, videos into `public/input/` — referenced from components as `/input/<name>`, never committed.
Naming convention per project slug:
- `{slug}-cover.jpg` — card cover / detail hero image
- `{slug}-video.mp4` — demo video on detail page
- `{slug}-{n}.png` — gallery images
