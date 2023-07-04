/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#312E38',
        input: '#232129',
        white: '#F4EDE8',
        orange: '#FF9000',
        gray: '#999591',
        grayHard: '#666360',
        shape: '#3E3B47',
        blackMedium: '#28262E',
        error: '#E83F5B',
      },
    },
  },
  plugins: [],
}
