/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
   daisyui: {
    themes: [
      {
        carDoctorTheme: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF3811",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",

          '.btn-primary': {
            "color":"#fff"
          },
          '.btn-outline.btn-primary:hover': {
            "color": "#fff"
          },
        },
      },
      "dark",
      "cupcake",
      "light",
    ],
  },
};
