import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        PermanentMarker: ["Permanent Marker", "cursive"],
      },
    
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwindcss-animated')
  ],
  
}
export default config
