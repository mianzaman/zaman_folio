How to generate CV PDF locally

Option A — Quick (no node script):
1. Open `cv.html` in your browser (double-click the file or open via VS Code Live Server).
2. Print (Ctrl+P) and choose "Save as PDF". Use A4 and enable "Background graphics".

Option B — Automated using Node + Puppeteer (recommended for repeatable output):
1. Ensure Node.js is installed (14+).
2. From project root run:

```powershell
npm install puppeteer --save-dev
node render-pdf.js
```

3. The script will generate `cv.pdf` in the project root.

Notes:
- On Windows you may need to allow Chromium downloads during `puppeteer` install.
- If you prefer headless Chrome already installed, set `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1` and adjust `puppeteer.launch({executablePath: 'path-to-chrome'})` in `render-pdf.js`.

If you want, I can also tweak fonts, layout, or export the PDF here if you upload the full CV text as plaintext or allow me to run Puppeteer in this environment.