import {chromium} from 'playwright';

const base = 'http://localhost:3000';
const shots = [
  {url: `${base}/en`, path: 'screenshot-home-en.png', full: true},
  {url: `${base}/bn`, path: 'screenshot-home-bn.png', full: true},
  {url: `${base}/en/what-we-do`, path: 'screenshot-what-we-do.png', full: false},
];

const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: 1366, height: 900}});

async function revealAll() {
  // scroll down in steps to trigger IntersectionObserver reveals, then back to top
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(900);
}

for (const s of shots) {
  const res = await page.goto(s.url, {waitUntil: 'networkidle', timeout: 45000});
  console.log(`${s.url} -> ${res.status()}`);
  if (s.full) await revealAll();
  await page.screenshot({path: s.path, fullPage: s.full});
}

await browser.close();
console.log('screenshots done');
