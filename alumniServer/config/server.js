module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['54166ab622a47258605f8d75f272325e044a72c4930dbf6b325930f41519ab9d4a9ea10c2197e27379babf4c7c61883315729e0c20277ea423bc335bd43e3eed1658047558b3d6633b2bd198f06c6eaa63c2b5a8441347c9851d05cb58c54157687b677ea12264f110db83eeb5965e42aab7c4aa3b6e4cd814ed97acf9224c92'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
