import { initializeBookDatabase, clearBookDatabase } from './books.test';
import searchBooksByCharacters from '../index';

describe('searching books by characters', () => {
  test('seraching function to get books', () => {
    expect(searchBooksByCharacters('goals')).toBeTruthy();
    expect(searchBooksByCharacters('goals')).toContainEqual({
      id: 1,
      summary:
        'The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential.',
      title: 'The Richest Man in Babylon',
      author: 'Grant Cardone'
    });
    expect(searchBooksByCharacters('goals')).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'The Richest Man in Babylon'
        })
      ])
    );

    expect(searchBooksByCharacters('achieve')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(
          {
            title: 'The Richest Man in Babylon'
          },
          { title: 'Free Will', author: 'Hermann Simon' }
        )
      ])
    );
    expect(searchBooksByCharacters('goals')).not.toBeNull();
  });
});

describe("check the length of the result's array", () => {
  expect(searchBooksByCharacters('goals')).not.toHaveLength(3);
  expect(searchBooksByCharacters('goals')).toHaveLength(1);
  expect(searchBooksByCharacters('jk')).toHaveLength(0);
});

describe('structure of the objects in book array', () => {
  let books;

  beforeEach(() => {
    books = initializeBookDatabase();
  });

  afterEach(() => {
    books = clearBookDatabase();
  });

  test('book list', () => {
    expect(initializeBookDatabase()).not.toBeNull();
    expect(initializeBookDatabase()).toBeTruthy();
  });

  test('Schema  of book object ', () => {
    const bookFirstObject = books[0];
    expect(books).toBeTruthy();
    expect(bookFirstObject).toHaveProperty('title');
    expect(bookFirstObject).toHaveProperty('author');
    expect(bookFirstObject).toHaveProperty('id');
    expect(bookFirstObject).toHaveProperty('summary');
  });
});
