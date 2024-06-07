/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         spacing: {
            '1/5': '20%',
            '1/10': '10%',
         },
         height: {
            15: '3.75rem',
         },
         width: {
            '1/20': '5%',
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         colors: {
            salonnblue: '#344d94',
            dark: '#1b1b1b',
            light: '#fff',
            accent: '#7B00D3',
            accentDark: '#ffdb4d',
            gray: '#747474',
         },
         fontFamily: {
            rb: ['var(--font-rb)'],
            in: ['var(--font-in)'],
         },
         fontSize: {
            xxs: '0.5rem',
         },
         outline: {
            salonnblue: '2px solid #163898', // replace with your preferred shade of blue
         },
         borderWidth: {
            1: '1px',
         },
         screens: {
            sxl: '1180px',
            // @media (mid-width: 1180px){...}
            xs: '480px',
            // @media (mid-width: 1180px){...}
         },
      },
   },
   variants: {
      extend: {
         outline: ['focus'],
      },
   },
   plugins: [require('@tailwindcss/typography')],
};
