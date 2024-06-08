import localFont from 'next/font/local';

const fontPrimary = localFont({
  variable: '--font-primary',
  src: [
    {
      path: './fonts/Blatant.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Blatant-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ],
});

const fontSecondary = localFont({
  variable: '--font-secondary',
  src: [
    {
      path: './fonts/Standerd.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Standerd-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export { fontPrimary, fontSecondary };
