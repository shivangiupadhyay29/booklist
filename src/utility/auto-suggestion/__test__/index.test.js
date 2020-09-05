import { initializeBookDatabase, clearBookDatabase } from './books';
import autoSuggestion from '../index';

describe('fautoSuggestion function', () => {
  let books;

  beforeEach(() => {
    books = initializeBookDatabase();
  });

  afterEach(() => {
    books = clearBookDatabase();
  });

  test(`BOOK:get book list limited by autoSuggestion function`, () => {
    const bookByLimit = autoSuggestion(books, 3);
    expect(bookByLimit.length).toBe(3);
  });

  test(`limit paramter passed to the autosuggestion function and
  array length of returned value must be the same`, () => {
    //passing limit as 5
    const limit = 5;
    const result = autoSuggestion(books, limit);
    expect(result.length).toEqual(limit);
  });
});
