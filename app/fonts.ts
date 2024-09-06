import localFont from 'next/font/local';

export const urbanistFonts = localFont({
  variable: '--font-urbanist',
  src: [
    {
      path: '../public/fonts/Urbanist-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Urbanist-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Urbanist-SemiBold.woff2',
      weight: '600'
    },
    {
      path: '../public/fonts/Urbanist-SemiBold.ttf',
      weight: '600'
    }
  ]
});
