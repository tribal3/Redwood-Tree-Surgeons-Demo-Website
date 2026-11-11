import fs from "node:fs";
import { chromium } from "playwright-core";

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = "http://127.0.0.1:5173/";
const browser = await chromium.launch({ executablePath: chrome, headless: true });

for (const viewport of [
  { width: 390, height: 600 },
  { width: 320, height: 568 },
]) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page.waitForTimeout(250);

  const panel = page.locator("#mobile-navigation");
  const metrics = await panel.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
    return {
      clientHeight: el.clientHeight,
      scrollHeight: el.scrollHeight,
      scrollTop: el.scrollTop,
      visible: getComputedStyle(el).display !== "none",
    };
  });

  console.log(`menu ${viewport.width}x${viewport.height}`, metrics);
  await page.close();
}

const iconPage = await browser.newPage({ viewport: { width: 512, height: 512 } });
for (const size of [16, 32, 48, 180, 192, 512]) {
  await iconPage.setViewportSize({ width: size, height: size });
  await iconPage.setContent(
    `<!doctype html><style>html,body{margin:0;background:transparent;overflow:hidden}img{display:block;width:100vw;height:100vh}</style><img src="${url}favicon.svg" alt="" />`,
  );
  await iconPage.locator("img").evaluate((img) => (img.complete ? true : img.decode()));
  const name =
    size === 180
      ? "apple-touch-icon.png"
      : size === 512
        ? "icon-512.png"
        : size === 192
          ? "icon-192.png"
          : `favicon-${size}x${size}.png`;
  await iconPage.screenshot({
    path: `public/${name}`,
    omitBackground: true,
    animations: "disabled",
  });
  console.log("wrote", name);
}

const png = fs.readFileSync("public/favicon-32x32.png");
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const directory = Buffer.alloc(16);
directory[0] = 32;
directory[1] = 32;
directory[2] = 0;
directory[3] = 0;
directory.writeUInt16LE(1, 4);
directory.writeUInt16LE(32, 6);
directory.writeUInt32LE(png.length, 8);
directory.writeUInt32LE(22, 12);
fs.writeFileSync("public/favicon.ico", Buffer.concat([header, directory, png]));
console.log("wrote favicon.ico");

await browser.close();
