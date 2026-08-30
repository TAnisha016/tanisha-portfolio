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
          DEFAULT: '#FF8A3D',
          hover: '#FFA45F',
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

        gridFlow: {
          '0%, 100%': {
            transform: 'scale(0.35)',
            opacity: '0.25',
          },

          '50%': {
            transform: 'scale(1)',
            opacity: '0.65',
          },
        },
      },

      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        gridFlow: 'gridFlow 8s ease-in-out infinite',
      },
    },
  },

  plugins: [],
}

