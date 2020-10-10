import { createFilter } from "../filterCreate";

describe("should create search filter", () => {
  const author = "Mickiewicz";
  const language = "pl";

  it("should return empty string when no arguments are passed", () => {
    expect(createFilter({})).toEqual("");
  });

  it("should return author filter when author is passed", () => {
    expect(createFilter({ author: author })).toEqual(
      `+inauthor:${author.toLowerCase()}`
    );
  });

  it("should return language filter when language is passed", () => {
    expect(createFilter({ language: language })).toEqual(
      `&langRestrict=${language}`
    );
  });

  it("should return author and language filter when both are passed", () => {
    expect(createFilter({ author: author, language: language })).toEqual(
      `+inauthor:${author.toLowerCase()}&langRestrict=${language.toLowerCase()}`
    );
  });
});
