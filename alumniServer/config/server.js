module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['775eb9634d62ae8d924315597d8619ce20e7bcaecb3923fdfaf467aad00793dd31a09e97e6e0d89ab48e2009f3c88f1c82fa8bbc794a2a8d28fad3b03714ef96f9c73d8c6ec25f6f1cac019c07e73487210837e74e4dc21b4295d28a1002a7029705363e1dda166b61a7d9bd52861babddd13f33b41a591275318e02463fd035'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
