import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        wiggle: 'wiggle 1s infinite',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { 
            transform: 'translateY(0)',
           },
          '50%': { 
            transform: 'translateY(-25%)' 
          },
        }
      },

    },
  },
  plugins: [
    plugin(function({ addUtilities } : {addUtilities : any }) {
      addUtilities({
        


        
      });
    })
  ]
};
export default config;
