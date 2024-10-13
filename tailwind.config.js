/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
      light: {
        "primary": "#1400ff",     // Customize primary color
        "secondary": "#ffffff",   // Customize secondary color
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#f3f4f6",    // Customize background
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#f87272",
      },
    },
    {
      dark: {
        "primary": "#7480ff",     // Customize primary color
        "secondary": "#1d232a",   // Customize secondary color
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#1d232a",    // Customize background
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#f87272",
      },
    }, "cupcake"],
  },
};
