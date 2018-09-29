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
    analysisData: _.times(15, function () {
      return {
        name: faker.address.city(),
        KPM25: faker.random.number(),
        KPM10: faker.random.number(),
        SO2: faker.random.number(),
        NO2: faker.random.number(),
        O3: faker.random.number(),
        CO: faker.random.number(),
      };
    }),
    analysisChart: _.times(1, function () {
      const arr = [];
      for (let i = 0; i < 30; i += 1) {
        arr.push({
          DataValue: faker.random.number(),
          Datatime: faker.date,
        });
      }
      return {
        KPM25: arr,
      };
    }),
  };
};
