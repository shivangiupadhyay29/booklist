import dataByProperty from '../data';
import constant from '../constant';

export const initializeBookDatabase = () => {
  const titles = dataByProperty(constant.TITLES);
  const authors = dataByProperty(constant.AUTHORS);
  return dataByProperty(constant.SUMMARIES)?.map((item, index) => ({
    ...item,
    title: titles[index],
    author: authors[index][constant.AUTHOR]
  }));
};

export const clearBookDatabase = () => null;

describe('test the database', () => {
  test('book list', () => {
    expect(initializeBookDatabase()).not.toBeNull();
    expect(initializeBookDatabase()).toBeTruthy();
  });

  test('passes when value is not NaN', () => {
    expect(initializeBookDatabase()).not.toBeNaN();
    expect(initializeBookDatabase()).not.toBeNull();
  });

  test('passes when value is NaN', () => {
    expect(clearBookDatabase()).toBeNull();
  });
});
