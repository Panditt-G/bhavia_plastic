/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d1b2a',   // Deep navy (logo color)
          light: '#1e3a5f',     // Medium navy
          dark: '#060e17',      // Almost black navy
        },
        accent: {
          DEFAULT: '#E87C2B',   // Warm orange – pops well on navy
          dark: '#C86518',
          light: '#F9DBBE',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1ebe57',
        },
        muted: '#6B7280',
        light: '#9CA3AF',
        border: '#E5E7EB',
        bg: {
          DEFAULT: '#F8F9FA',   // Cream-white (like logo bg)
          card: '#FFFFFF',
          section: '#F0F2F5',   // Cool light gray section
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"League Spartan"', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 16px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)',
        lg: '0 10px 40px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
        xl: '0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.10)',
        accent: '0 4px 20px rgba(232,124,43,0.35)',
        primary: '0 4px 20px rgba(13,27,42,0.30)',
      },
      keyframes: {
        'scroll-left-to-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        pulseWa: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37,211,102,0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        marquee: 'scroll-left-to-right 60s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        fadeIn: 'fadeIn 0.5s ease forwards',
        pulseWa: 'pulseWa 2s infinite',
        float: 'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
