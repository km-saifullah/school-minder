/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222",
        secondary: "#3BA3FB",
        headingColor: "#181818",
        paragraph: "#",
        inputBg: "#F2F2F2",
      },
      fontFamily: {
        openSans: '"Open Sans", sans-serif',
        poppins: '"Poppins", sans-serif',
      },
      backgroundImage: {
        "signup-img":
          "linear-gradient(rgba(59, 163, 251, 0.8), #222), url('./src/assets/images/signup_img.jpg')",
      },
      maxWidth: {
        container: "1150px",
      },
    },
  },
  plugins: [],
};
