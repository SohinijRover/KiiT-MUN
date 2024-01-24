/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      HeroBackground: "linear-gradient(180deg, #001212 7.95%, #1A4D54 53.43%, #001212 85.60%);",
      EventBackground: "linear-gradient(180deg, #001212 7.95%, #1A4D54 47.43%, #001212 100%);",
      secBlueBg:  "linear-gradient(180deg, #001212 -21.21%, #1E8897 99.91%)",
      secGreenBg: "linear-gradient(180deg, #47725E -26.67%, #68B792 118.67%);",
      buttonBackground: "linear-gradient(90deg, #B0693B 0%, #C0896A 48.23%, #AF693B 100%)",
      MobileHeader: "linear-gradient(180deg, #445DB6 0%, #7860C5 100%);",
      textBG: "linear-gradient(180deg, #001212 7.95%, #1A4D54 47.43%, #001212 100%);",
      RegisterationBG: "linear-gradient(180deg, #001212 7.95%, #1A4D54 47.43%, #001212 100%);",
      ModalBg:"linear-gradient(180deg,  rgba(175,105,59,1) 50%, rgba(26,77,84,1) 100%)",
      committeeLine: "linear-gradient(1deg, #B0693B 0%, #C0896A 100%);",
      blackBlur: "radial-gradient(60.80% 55.20% at 49.07% 39.60%, #FFF 6.94%, #FBFBFC 20.22%, #F0F1F2 32.23%, #DEDEE3 43.75%, #C4C5CC 54.98%, #A3A4B0 65.99%, #7A7B8C 76.84%, #494B62 87.56%, #121533 97.92%, #060929 100%);",
      committeeCard: "linear-gradient(1deg, #B0693B 0%, #C0896A 100%);",
      galleryNav: "linear-gradient(180deg, #082e28 7.95%, #1A4D54 47.43%, #082e28 100%);",
      },
        screens: {
        "ssm": '370px',
        "3xl": "1440px",
        "4xl": "1990px",
      },
      colors: {
        'carouselBackground':'#D7E1E3',
        'carouselTextLight':'#1A4D54',
        'carouselTextDark':'#001212',
        'carouselHead':'#445DB6',
        'navBg' : '#09231F'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
