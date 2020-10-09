export const createFilter = (author, language) => {
    let languageFilter = language ? `&langRestrict=${language.toLowerCase()}` : '';
    let authorFiler = author ? `+inauthor:${author.toLowerCase()}` : '';

    return `${authorFiler}${languageFilter}`;
}