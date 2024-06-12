/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Asegúrate de incluir todas las rutas relevantes para tus archivos fuente
  ],
  darkMode: 'media', // Puedes eliminar esta línea si no estás utilizando dark mode
  theme: {
    extend: {
      // Tu configuración de tema personalizada aquí
    },
  },
  plugins: [
    // Tus plugins de Tailwind CSS aquí
  ],
};