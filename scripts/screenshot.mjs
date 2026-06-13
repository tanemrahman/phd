import {chromium} from 'playwright';

const base = 'http://localhost:3000';
const shots = [
  {url: `${base}/en`, path: 'screenshot-home-en.png', full: true},
  {url: `${base}/bn`, path: 'screenshot-home-bn.png', full: false},
  {url: `${base}/en/what-we-do`, path: 'screenshot-what-we-do.png', full: false},
];

const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: 1366, height: 900}});

for (const s of shots) {
  const res = await page.goto(s.url, {waitUntil: 'networkidle', timeout: 30000});
  console.log(`${s.url} -> ${res.status()}`);
  await page.screenshot({path: s.path, fullPage: s.full});
}

await browser.close();
console.log('screenshots done');
