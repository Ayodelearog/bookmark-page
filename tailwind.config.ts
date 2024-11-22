import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'md': '375px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        primary: {
          'soft-blue': 'hsl(231, 69%, 60%)',
          'soft-red': 'hsl(0, 94%, 66%)',
        },
        neutral: {
          'grayish-blue': 'hsl(229, 8%, 60%)',
          'very-dark-blue': 'hsl(229, 31%, 21%)',
        },
        
      },
      fontSize: {
        body: '18px',
      },
      fontWeight: {
        regular: '400',   
        medium: '500',     
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
      },
    },
  },
  plugins: [],
} satisfies Config;

// ## Colors

// ### Primary

// - Soft Blue: hsl(231, 69%, 60%)
// - Soft Red: hsl(0, 94%, 66%)

// ### Neutral

// - Grayish Blue: hsl(229, 8%, 60%)
// - Very Dark Blue: hsl(229, 31%, 21%)

