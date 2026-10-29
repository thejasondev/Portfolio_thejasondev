import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const WIDTH = 1200;
const HEIGHT = 630;

async function generate() {
  const profilePath = path.join(publicDir, "profile-pic", "thejasondev-perfil.webp");
  const avatar = await sharp(profilePath)
    .resize(440, 440, { fit: "cover", position: sharp.strategy.attention })
    .png()
    .toBuffer();
  const avatarB64 = avatar.toString("base64");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0b0b"/>
      <stop offset="1" stop-color="#1f1d1a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.45" r="0.6">
      <stop offset="0" stop-color="#D4AF37" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#D4AF37" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#D4AF37"/>
      <stop offset="1" stop-color="#F4E4BC"/>
    </linearGradient>
    <clipPath id="avatarClip"><circle cx="905" cy="315" r="210"/></clipPath>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <!-- Avatar -->
  <circle cx="905" cy="315" r="218" fill="none" stroke="#D4AF37" stroke-width="3" opacity="0.85"/>
  <image href="data:image/png;base64,${avatarB64}" x="695" y="105" width="420" height="420" clip-path="url(#avatarClip)" preserveAspectRatio="xMidYMid slice"/>

  <!-- Text -->
  <rect x="80" y="150" width="64" height="4" fill="url(#goldline)"/>
  <text x="80" y="205" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="6" fill="#D4AF37" font-weight="700">PORTFOLIO</text>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-size="78" fill="#FFFFFF" font-weight="800">thejasondev</text>
  <text x="80" y="360" font-family="Arial, Helvetica, sans-serif" font-size="36" fill="#D4AF37" font-weight="600">Jason Guerra</text>
  <text x="80" y="420" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="#C4C4C4">Ingeniero Industrial &amp; Desarrollador Frontend</text>
  <text x="80" y="540" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#8a8a8a">thejasondev.vercel.app</text>
</svg>`;

  const out = path.join(publicDir, "og-image.png");
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);

  const meta = await sharp(out).metadata();
  console.log(
    `OG generada: ${meta.width}x${meta.height} (${Math.round(
      fs.statSync(out).size / 1024
    )}KB)`
  );
}

generate().catch((err) => {
  console.error("Error generando OG:", err);
  process.exit(1);
});
