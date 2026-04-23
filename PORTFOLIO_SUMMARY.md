# Fulean2 - Resumen para Portafolio

Fulean2 es una aplicación web progresiva (PWA) diseñada específicamente para cambistas y comerciantes en Cuba, actuando como un contador de efectivo y conversor de divisas estructurado y altamente optimizado.

## ✨ Características Principales

*   **Contador de Billetes (CUP):** Sistema de conteo rápido por denominación y desglose inteligente que utiliza un algoritmo de programación dinámica para calcular opciones de entrega exactas sin sobrantes.
*   **Gestión de Divisas:** Soporte integral para 6 denominaciones y métodos de pago clave (USD, EUR, CAD, MLC, ZELLE, CLASICA).
*   **Tasas de Cambio en Tiempo Real:** Integración con la API de [El Toque] para mantener tasas de cambio actualizadas, además de soporte para establecer tasas manuales.
*   **Gestión e Historial de Operaciones:** 
    *   **Compra/Venta:** Registro estructurado con seguimiento de inventario tipo FIFO.
    *   **Cambio (Swap):** Opciones de intercambio de divisas directas calculando automáticamente el costo base derivado.
    *   **Historial:** Seguimiento detallado y registro completo de todas las transacciones realizadas.
*   **Reportes y Analíticas:** Vista de portafolio avanzado que incluye valorización del inventario en tiempo real, estimación de ganancias (realizadas frente a no realizadas), tendencias del mercado mediante análisis de regresión lineal y herramientas para simular ventas.
*   **UI Adaptativa (Modo Sunlight):** Un tema visual de alto contraste especialmente diseñado para mantener la visibilidad en uso exterior bajo la luz solar directa.

## 🛠️ Tecnologías Empleadas

*   **Frameworks:** Astro, React.
*   **Arquitectura:** Aplicación Web Progresiva (PWA) configurada con Service Worker y Manifest de aplicación para soporte offline y funcionamiento eficiente.
*   **Gestor de Estado:** Nanostores (manejo de estado global reactivo e independiente).
*   **Estilos y Diseño:** Tailwind CSS v4.
*   **Iconografía & UI:** Iconos provistos por Lucide React.
*   **Integración de Datos:** Consumo de la API externa de "El Toque" para datos en directo.
