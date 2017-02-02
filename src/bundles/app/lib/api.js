import Faker from 'faker/lib';
import FakerEnglishLocales from 'faker/lib/locales/en';
import Promise from 'bluebird';

const faker = new Faker({
  locales: {
    en: FakerEnglishLocales,
  },
});

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    id: i + 1,
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    image: faker.image.food(),
    price: faker.commerce.price(),
  });
}

const perPage = 10;

export const getData = (page) => {
  return new Promise(resolve => {
    page = Math.max(page, 1);

    setTimeout(() => {
      resolve(data.slice((page - 1) * perPage, perPage));
    }, 250);
  });
};
