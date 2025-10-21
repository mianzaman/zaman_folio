// Simple Puppeteer script to render cv.html to cv.pdf
// Usage: node render-pdf.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const file = 'cv.html';
  const content = fs.readFileSync(path.resolve(__dirname, file), 'utf8');
  await page.setContent(content, {waitUntil: 'networkidle0'});
  await page.emulateMediaType('print');
  await page.pdf({path: 'cv.pdf', format: 'A4', printBackground: true, margin: {top: '20mm', right: '15mm', bottom: '20mm', left: '15mm'}});
  await browser.close();
  console.log('cv.pdf generated');
})();