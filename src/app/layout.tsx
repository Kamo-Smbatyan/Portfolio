import { cx } from '@src/utils';
import './globals.css';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-in' });
const roboto = Roboto({ weight: '300', subsets: ['latin'], display: 'swap', variable: '--font-rb' });

export const metadata = {
   title: 'Xander Carruth - Tech Portfolio',
   description: "Xander Carruth's portfolio for his machine learning and full stack endeavors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={cx(inter.variable, roboto.variable, 'font-rb')}>{children}</body>
      </html>
   );
}
