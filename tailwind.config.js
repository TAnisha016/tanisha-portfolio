/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0D0B09',
          surface: 'rgba(255, 255, 255, 0.03)',
          raised: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
        },

        ink: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },

        accent: {
          DEFAULT: '#F97316',
          hover: '#FB923C',
          dim: 'rgba(249, 115, 22, 0.12)',
          border: 'rgba(249, 115, 22, 0.35)',
        },

        accent2: {
          DEFAULT: '#FB923C',
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
          '0%': {
            opacity: '0',
            transform: 'translateY(12px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },

  plugins: [],
}

