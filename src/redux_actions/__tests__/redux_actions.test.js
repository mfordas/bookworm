import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import {
  resetSearchResults,
  getBooksFromApi
} from "../bookActions";
import {
  TYPES
} from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe("async actions", () => {
  beforeEach(() => {
    moxios.install();
  })
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  it("should get new books from api if search for the first time", async () => {
    store = mockStore({
      books: [],
      bookTitle: '',
      filter: ''
    });

    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          items: [1, 2, 3, 4, 5]
        }
      });
    });

    const expectedActions = [{
      type: TYPES.getBooks,
      books: [1, 2, 3, 4, 5],
      bookTitle: 'Potop',
      filter: ''
    }];

    await store.dispatch(getBooksFromApi("Potop", [], ''));
    expect(store.getActions()).toEqual(expectedActions);
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