/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            'primary': '#1E1E1E',
            'secondary': '#2F2F2F',
            'tertiary': '#3F3F3F',
         },
         screens: {
            'xxsm': { 'max': '415px' },
            // @media (max-width: 415px) {...}

            'xsm': { 'max': '639px' },
            // @media (min-width: 640px) {...}
         }
      },
      
   },
   variants: {},
   plugins: [],
}
