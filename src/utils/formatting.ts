/**
 * Utilidades de formateo para texto y números
 */

/**
 * Trunca un texto a una longitud específica añadiendo "..."
 * @param text - Texto a truncar
 * @param maxLength - Longitud máxima del texto
 * @returns Texto truncado con "..." si excede la longitud máxima
 *
 * @example
 * truncateText("Este es un texto muy largo", 10) // "Este es un..."
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

/**
 * Formatea un precio en formato USD
 * @param amount - Cantidad a formatear (número o string)
 * @returns String formateado como precio USD
 *
 * @example
 * formatPrice(100) // "$100.00"
 * formatPrice("Precio a consultar") // "Precio a consultar"
 */
export const formatPrice = (amount: number | string): string => {
  if (typeof amount === "string") return amount;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

/**
 * Capitaliza la primera letra de un string
 * @param str - String a capitalizar
 * @returns String con primera letra mayúscula
 *
 * @example
 * capitalize("hola mundo") // "Hola mundo"
 */
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Genera un slug a partir de un texto
 * @param text - Texto a convertir en slug
 * @returns String en formato slug (lowercase, sin espacios, con guiones)
 *
 * @example
 * slugify("Hola Mundo 123") // "hola-mundo-123"
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
