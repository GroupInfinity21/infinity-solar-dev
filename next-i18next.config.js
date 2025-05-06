module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  localePath: './public/locales',
  i18next: {
    defaultNS: 'common',
    returnObjects: true, // 👈 Isso permite retornar arrays/objetos nas traduções
  },
}
