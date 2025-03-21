/** @type {import('next-i18next').UserConfig} */

const path = require('path');

module.exports = {
    i18n: {
      defaultLocale: 'cn',
      locales: ['en', 'cn'],
      localePath: path.resolve('./public/locales'),
    },
}