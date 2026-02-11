import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',         // App Router pages & layouts
    './components/**/*.{js,ts,jsx,tsx,mdx}',  // Your custom components
    './src/**/*.{js,ts,jsx,tsx,mdx}',         // If you have src/ folder (you do)
  ],
  theme: {
    extend: {
      // You can add custom colors/fonts here later if needed
    },
  },
  plugins: [],
}

export default config