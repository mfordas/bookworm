export const createFilter = ({ author = "", language = "" }) => {
  let authorFiler = author ? `+inauthor:${author.toLowerCase()}` : "";
  let languageFilter = language
    ? `&langRestrict=${language.toLowerCase()}`
    : "";

  return `${authorFiler}${languageFilter}`;
};
