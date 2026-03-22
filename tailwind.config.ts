import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          800: '#243660',
          900: '#111B30',
        },
        forest: {
          DEFAULT: '#2D6A4F',
          50: '#F0FAF5',
          100: '#D5F0E3',
          500: '#3A8A65',
          600: '#2D6A4F',
          700: '#225240',
        },
        amber: {
          DEFAULT: '#F4A228',
          50: '#FFFBF0',
          100: '#FEF3D0',
          500: '#F4A228',
          600: '#E08B10',
          700: '#B56D0C',
        },
        cream: {
          DEFAULT: '#F8F7F2',
          100: '#FDFCF8',
        },
        charcoal: {
          DEFAULT: '#1A1A2E',
          600: '#3D3D5C',
          400: '#6B6B8A',
        },
        surface: {
          DEFAULT: '#F8F7F2',
          border: '#E5E3DC',
        },
      },
      fontFamily: {
        display: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
      },
      maxWidth: {
        '8xl': '88rem',
        prose: '70ch',
      },
    },
  },
  plugins: [typography],
}

export default config
