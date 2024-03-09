/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mb: "1440px",
      },
      colors: {
        navText: "#707070",
        primary: {
          DEFAULT: "#67A039",
          100: "#A1D683",
          hover: "#56C318",
        },
        bodyText: "#424242",
      },
      borderColor: {
        main: "#DADADA",
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        40: "40px",
      },
    },
  },
  plugins: [],
};
