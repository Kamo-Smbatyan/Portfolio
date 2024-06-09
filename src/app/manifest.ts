// eslint-disable-next-line @typescript-eslint/no-var-requires
const siteMetadata = require('../utils/siteMetaData');

export default function manifest() {
   return {
      name: siteMetadata.headerTitle,
      short_name: siteMetadata.headerTitle,
      description: siteMetadata.description,
      start_url: '/',
      display: 'standalone',
      icons: [
         {
            src: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
         },
      ],
   };
}
