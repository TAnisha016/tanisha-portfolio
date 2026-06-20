/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0B',
          surface: '#131316',
          raised: '#19191D',
          border: '#212126',
          borderHover: '#2C2C32',
        },
        ink: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#7C7FF5',
          dim: 'rgba(99, 102, 241, 0.12)',
          border: 'rgba(99, 102, 241, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

