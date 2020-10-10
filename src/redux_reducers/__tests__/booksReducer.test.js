import booksReducer from "../booksReducer";
import { TYPES } from "../../redux_actions/types";

describe("books reducer", () => {
  it("should return the initial state", () => {
    expect(booksReducer(undefined, {})).toEqual({
      books: [],
      bookTitle: "",
      filter: ""
    });
  });
  it("should handle books search", () => {
    expect(
      booksReducer([], {
        type: TYPES.getBooks,
        books: [1, 2, 3, 4, 5],
        bookTitle: "Abc",
        filter: "12/5"
      })
    ).toEqual({
      books: [1, 2, 3, 4, 5],
      bookTitle: "Abc",
      filter: "12/5"
    });
  });

  it("should handle loading next books", () => {
    const initialState = {
      books: [1, 2, 3, 4, 5],
      bookTitle: "Abc",
      filter: "12/5"
    };
    expect(
      booksReducer(initialState, {
        type: TYPES.getNextBooks,
        books: [6, 7, 8],
        bookTitle: "Abc",
        filter: "12/5"
      })
    ).toEqual({
      books: [1, 2, 3, 4, 5, 6, 7, 8],
      bookTitle: "Abc",
      filter: "12/5"
    });
  });

  it("should handle resetSearch", () => {
    expect(
      booksReducer([], {
        type: TYPES.resetSearch,
        books: [],
        bookTitle: "",
        filter: ""
      })
    ).toEqual({
      books: [],
      bookTitle: "",
      filter: ""
    });
  });
});
