module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "rgb(2, 127, 255)",
        orange: "rgb(230, 103, 2)",
        green: "rgb(12, 157, 70)",
        purple: "rgb(61, 68, 195)",
        red: "rgb(255, 62, 23)",
        text: "rgb(29, 29, 31)",
        deaktive: "rgb(110, 110, 115)",
        border: "rgb(210, 210, 215)",
        text2: "#8e8e93",
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        bg: "rgb(245,245,247)",
        card: "rgb(250, 250, 250)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
      theme: {
        extend: {
          zIndex: {
            100: "100",
          },
        },
      },
    },
  },
  plugins: [],
};
