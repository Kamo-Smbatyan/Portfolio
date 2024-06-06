import { cx } from '@src/utils';
import './globals.css';
import { Inter, Roboto } from 'next/font/google';
import siteMetadata from '@src/utils/siteMetaData';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-in' });
const roboto = Roboto({ weight: '300', subsets: ['latin'], display: 'swap', variable: '--font-rb' });

export const metadata = {
   metadataBase: new URL(siteMetadata.siteUrl),
   title: {
      template: `%s | ${siteMetadata.title}`,
      default: siteMetadata.title,
   },
   description: siteMetadata.description,
   openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      images: [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: false,
         noimageindex: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
   twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      images: [siteMetadata.socialBanner],
   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={cx(inter.variable, roboto.variable, 'font-rb')}>{children}</body>
      </html>
   );
}
