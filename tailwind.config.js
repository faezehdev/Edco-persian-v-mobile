/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./**/*.{html,js}", "./css/**/*.css", "./js/**/*.js"],
  darkMode: "class",

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    transitionTimingFunction: {
      "in-expo": "cubic-bezier(0.25, 0.1, 0.25, 1)",
    },
    colors: {
   dark:'#000000',
   green:'#00A752',
   white:'#FFFFFF',
   dark1:'#1F1F1F',
   gray:"#8B8B8F",
   light:"#F1F1F1",
   dark2:'#272727'
     
    },
    fontFamily: {
      IRANSansWebFANUM300: ["IRANSansWebFANUM300"],
      IRANSansWebFANUM400: ["IRANSansWebFANUM400"],
      IRANSansWebFANUM500: ["IRANSansWebFANUM500"],
      IRANSansWebFANUM700: ["IRANSansWebFANUM700"],
      IRANSansWebFANUM900: ["IRANSansWebFANUM900"],
      IbarraRealNova400:["IbarraRealNova400"]
    },
    extend: {
      borderRadius: {
        "rounded-md": "5px",
      },
      content: {
        content1: " ",
      },
      lineHeight: {
        18.78: "18.78px",
        64: "64px",
        23: "23px",
        25.4: "25.04px",
        57.97: "57.97px",
        17.96: "17.96px",
        21.91: "21.91px",
        32.03: "32.03px",
        56.35: "56.35px",
        25.04: "25.04px",
        37.97: "37.97px",
        37.57: "37.57px",
        31.03: "31.03px",
        28.17: "28.17px",
        18.78: "18.78px",
        20.25: "20.25px",
        24: "24px",
        46.96: "46.96px",
        16.41: "16.41px",
        14.06: "14.06px",
        18.75: "18.75px",
        31: "31px",
        43.4: "43.4px",
        17.05: "17.05px",
        21: "21px",
        24.18: "24.18px",
        27.09: "27.09px",
        20.15: "20.15px",
        23.48: "23.48px",

      },

      width: {
        "85p": "85%",
        "90p": "90%",
        "95p": "95%",

      },
      maxWidth: {
        x100: "100%",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
    },
    translate: {
      100: "-100%",
    },
  },
};
