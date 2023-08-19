/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F1F3F4",
          100: "#E2E7E9",
          150: "#D5DADD",
          300: "#ABB5BA",
          500: "#778288",
        },

        robot: "#B93129",
      },

      fontSize: {
        strong: [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "120%",
          },
        ],
        small: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "140%",
          },
        ],
        p: [
          "20px",
          {
            fontWeight: "400",
            lineHeight: "120%",
          },
        ],
      },

      keyframes: {
        "jako-left": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-30deg)" },
        },
        "jako-right": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(30deg)" },
        },
      },
      animation: {
        "jako-left": "jako-left 1s ease infinite alternate",
        "jako-right": "jako-right 1s ease infinite alternate",
      },
    },
  },
  plugins: [require("daisyui")],
};
