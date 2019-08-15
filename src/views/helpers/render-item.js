exports.render = (arr) => arr.map((element) => ({
  title: element.volumeInfo.title,
  imageUrl: element.volumeInfo.imageLinks.thumbnail,
  bookUrl: element.volumeInfo.previewLink,
  publishedDate: element.volumeInfo.publishedDate,
  categories: element.volumeInfo.categories,
}));
