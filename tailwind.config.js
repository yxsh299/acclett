/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#121212', // Almost black
          secondary: '#1E1E1E', // Dark gray
          surface: '#2D2D2D', // Medium dark gray
          accent: '#64FFDA', // Mint green
          'accent-hover': '#4ECDC4', // Slightly darker mint
          text: {
            primary: '#FFFFFF', // White
            secondary: '#B3B3B3', // Light gray
            disabled: '#757575' // Medium gray
          }
        },
        light: {
          primary: '#FFFFFF', // White
          secondary: '#F5F5F5', // Very light gray
          surface: '#EEEEEE', // Light gray surface
          accent: '#00BFA5', // Teal
          'accent-hover': '#00A896', // Darker teal
          text: {
            primary: '#212121', // Almost black
            secondary: '#757575', // Medium gray
            disabled: '#BDBDBD' // Light gray
          }
        },
        brand: {
          teal: {
            50: '#E0F2F1',
            100: '#B2DFDB',
            200: '#80CBC4',
            300: '#4DB6AC',
            400: '#26A69A',
            500: '#00BFA5', // Primary brand color
            600: '#00A896',
            700: '#00897B',
            800: '#00796B',
            900: '#00695C'
          },
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5', 
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121'
          }
        }
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
      }
    },
  },
  plugins: [],
};