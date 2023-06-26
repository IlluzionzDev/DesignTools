/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: ['./styles', './components'],
        prependData: `@import "@illuzionz-studios/design-system/style-utils";`,
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig;
