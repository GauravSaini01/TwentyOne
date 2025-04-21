/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_5 : '#092834',
        custom_4 : '#1A3E4C',
        custom_3 : '#347B98',
        custom_2 : '#67AFCB',
        custom_1 : '#E4F1F6',
      },
      fontFamily: {
        custom: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'),
  ],
}

