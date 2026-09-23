# PhysicsPath

A free, self-study Engineering Physics website — every topic from Level 0
(plain-language intuition) to Level Max (beyond-syllabus depth), plus an
AI chat helper, built around the Bihar Engineering University syllabus
pattern.

## Status
🚧 Phase 1 of ~10 — project setup & homepage skeleton. See progress notes
at the bottom of this file.

## Project structure
```
physics-site/
├── index.html          Homepage
├── syllabus.html        Topic list (stub — built in Phase 4)
├── chat.html             AI helper (stub — built in Phase 6)
├── about.html
├── css/
│   └── style.css        All site styling
├── js/
│   ├── main.js           Renders the homepage semester grid
│   └── data/
│       └── physics-syllabus.js   All topic data (single source of truth)
└── README.md
```

## Running it locally
No build step needed — it's plain HTML/CSS/JS.
1. Download or clone this folder.
2. Open `index.html` in any browser.

(Optional, avoids some browser file-loading quirks: run `python -m http.server`
inside the folder, then visit `http://localhost:8000`.)

## Deploying for free (GitHub Pages)
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages** in the repo.
3. Under "Source", choose the `main` branch and `/ (root)` folder.
4. Your live link appears at `https://<your-username>.github.io/<repo-name>/`.

## Progress log
- **Phase 1 (done):** Folder structure, homepage, styling system, and the
  syllabus data file with 7 modules across the physics syllabus.
