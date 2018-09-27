/* eslint-disable prefer-arrow-callback,global-require,import/no-unresolved,import/no-extraneous-dependencies,max-len */
module.exports = function () {
  const faker = require('faker');
  faker.locale = 'zh_CN';
  const _ = require('lodash');
  return {
    people: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      };
    }),
    address: _.times(100, function () {
      return {
        id: faker.random.uuid(),
        city: faker.address.city(),
        county: faker.address.county(),
      };
    }),
  };
};
