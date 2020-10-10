import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { resetSearchResults, getBooksFromApi } from "../bookActions";
import { TYPES } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

xdescribe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", async () => {
    fetchMock.getOnce("/booksFromApi", {
      body: {
        todos: [
          {
            type: TYPES.getBooks
          },
          {
            type: TYPES.getNextBooks
          }
        ]
      },
      headers: {
        "content-type": "application/json"
      }
    });

    const expectedActions = [
      {
        type: TYPES.getBooks,
        books: [1, 2, 3, 4, 5],
        bookTitle: "Abc",
        filter: "12/5"
      },
      {
        type: TYPES.getNextBooks,
        books: [6, 7, 8],
        bookTitle: "Abc",
        filter: "12/5"
      }
    ];
    const store = mockStore({
      todos: []
    });

    console.log(store);

    await store.dispatch(getBooksFromApi("Abc", [])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("sync actions", () => {
  it("should create an action to reset search", () => {
    const expectedAction = {
      type: TYPES.resetSearch,
      books: [],
      bookTitle: "",
      filter: ""
    };
    expect(resetSearchResults()).toEqual(expectedAction);
  });
});
