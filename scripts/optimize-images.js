import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a la imagen de perfil original
const inputPath = path.join(
  __dirname,
  "../public/profile-pic/profile_pic_original.webp"
);
const outputDir = path.join(__dirname, "../public/profile-pic");

async function optimizeProfileImage() {
  try {
    console.log("Optimizando imagen de perfil con mejor calidad...");

    // Crear versión optimizada con mejor calidad
    await sharp(inputPath)
      .resize(400) // Dimensión mayor para mejor calidad
      .webp({
        quality: 90, // Calidad más alta (80 -> 90)
        effort: 6, // Mayor esfuerzo de compresión
        smartSubsample: true, // Mejor submuestreo para conservar detalles
      })
      .toFile(path.join(outputDir, "profile_pic_optimized.webp"));

    console.log("Imagen optimizada correctamente con mejor calidad.");

    // Obtener y mostrar estadísticas de las imágenes
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(
      path.join(outputDir, "profile_pic_optimized.webp")
    ).size;

    console.log(`Tamaño original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`Tamaño optimizado: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(
      `Ahorro: ${(100 - (optimizedSize / originalSize) * 100).toFixed(2)}%`
    );
  } catch (error) {
    console.error("Error al optimizar la imagen:", error);
  }
}

// Ejecutar la optimización
optimizeProfileImage();
