const Chance = require('chance').Chance();

const App = require('./app/app');

const isProduction = process.env.NODE_ENV === 'production';

new App({
  isProduction,
  username: Chance.email(),
  nickname: '隔壁老王' + Chance.string({ length: 5, pool: '0123456789' }),
  password: Chance.string({ length: 12 }),
  phone: process.env.PHONE || '13800000000',
  once: isProduction === false,
})
  .resolveProviders('./app/providers/')
  .bootstrap();
