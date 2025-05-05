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
  "../public/profile-pic/profile_pic.webp"
);
const outputDir = path.join(__dirname, "../public/profile-pic");

async function optimizeProfileImage() {
  try {
    console.log("Optimizando imagen de perfil...");

    // Crear versión optimizada
    await sharp(inputPath)
      .resize(300) // Dimensión adecuada para avatar
      .webp({ quality: 80 }) // Formato WebP con buena calidad
      .toFile(path.join(outputDir, "profile_pic_optimized.webp"));

    console.log("Imagen optimizada correctamente.");

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
