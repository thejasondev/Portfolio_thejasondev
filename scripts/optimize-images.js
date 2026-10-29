import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Evitar que libvips retenga locks de archivo en Windows
sharp.cache(false);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "..", "public");

const targets = [
  // Screenshots de proyectos (1280px de ancho, suficiente para retina 2x en el layout)
  {
    input: "projects-pic/ditos-screen.png",
    output: "projects-pic/ditos-screen.webp",
    width: 1280,
    q: 80,
  },
  {
    input: "projects-pic/elevatecsm-screen.png",
    output: "projects-pic/elevatecsm-screen.webp",
    width: 1280,
    q: 80,
  },
  {
    input: "projects-pic/castropol-screen.webp",
    output: "projects-pic/castropol-screen.webp",
    width: 1280,
    q: 80,
  },
  {
    input: "projects-pic/fulean2-screen.png",
    output: "projects-pic/fulean2-screen.webp",
    width: 1280,
    q: 80,
  },
  {
    input: "projects-pic/vraops-screen.png",
    output: "projects-pic/vraops-screen.webp",
    width: 1280,
    q: 80,
  },

  // Logos de proyectos (256px es más que suficiente para su tamaño en pantalla)
  {
    input: "projects-pic/logos-mobile/castropol-logo.jpg",
    output: "projects-pic/logos-mobile/castropol-logo.webp",
    width: 256,
    q: 80,
  },
  {
    input: "projects-pic/logos-mobile/logo-ditos.png",
    output: "projects-pic/logos-mobile/logo-ditos.webp",
    width: 256,
    q: 80,
  },
  {
    input: "projects-pic/logos-mobile/logo-elevate.png",
    output: "projects-pic/logos-mobile/logo-elevate.webp",
    width: 256,
    q: 80,
  },
  {
    input: "projects-pic/logos-mobile/logo-fulean2.png",
    output: "projects-pic/logos-mobile/logo-fulean2.webp",
    width: 256,
    q: 80,
  },
  {
    input: "projects-pic/logos-mobile/logo-ops.png",
    output: "projects-pic/logos-mobile/logo-ops.webp",
    width: 256,
    q: 80,
  },

  // Foto de perfil principal
  {
    input: "profile-pic/thejasondev-perfil.webp",
    output: "profile-pic/thejasondev-perfil.webp",
    width: 720,
    q: 85,
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retry = async (fn, attempts = 5) => {
  for (let i = 0; i < attempts; i++) {
    try {
      return fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await sleep(200 * (i + 1));
    }
  }
};

async function optimize() {
  let totalSaved = 0;
  let totalOriginal = 0;

  for (const target of targets) {
    const inputPath = path.join(publicDir, target.input);
    const outputPath = path.join(publicDir, target.output);

    if (!fs.existsSync(inputPath)) {
      console.warn(`  ⚠ No existe: ${target.input}`);
      continue;
    }

    const originalSize = fs.statSync(inputPath).size;
    const originalFormat = path.extname(inputPath).replace(".", "").toLowerCase();
    const tmpInput = `${inputPath}.tmp-src`;
    const tmpOutput = `${outputPath}.tmp`;

    // Trabajar con copia temporal: sharp mantiene un lock en Windows al leer
    fs.copyFileSync(inputPath, tmpInput);

    const optimizedBuffer = await sharp(tmpInput)
      .resize({ width: target.width, withoutEnlargement: true })
      .webp({ quality: target.q, effort: 6 })
      .toBuffer();

    fs.writeFileSync(tmpOutput, optimizedBuffer);

    await retry(() => fs.unlinkSync(inputPath));
    await retry(() => fs.renameSync(tmpOutput, outputPath));
    await retry(() => fs.unlinkSync(tmpInput));

    const optimizedSize = fs.statSync(outputPath).size;
    const saved = originalSize - optimizedSize;
    totalOriginal += originalSize;
    totalSaved += saved;

    console.log(
      `  ✓ ${target.input} (${originalFormat}) -> ${target.output}: ${(
        originalSize / 1024
      ).toFixed(0)}KB -> ${(optimizedSize / 1024).toFixed(0)}KB (${(
        (1 - optimizedSize / originalSize) * 100
      ).toFixed(1)}% ahorro)`
    );
  }

  if (totalOriginal > 0) {
    console.log(
      `\nTotal: ${(totalOriginal / 1024).toFixed(0)}KB -> ${(
        (totalOriginal - totalSaved) / 1024
      ).toFixed(0)}KB  (${((1 - totalSaved / totalOriginal) * 100).toFixed(1)}% ahorro)`
    );
  }
}

optimize().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
