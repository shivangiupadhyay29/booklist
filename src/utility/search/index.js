import dataByProperty from './data';
import constant from './constant';

// get the data by property
const schema = (key) => {
  return dataByProperty(key);
};

// search function
// function searchBooksByCharacters(search) {
//   // gathers the titles and authors from the data JSON.
//   const titles = schema(constant.TITLES);
//   const authors = schema(constant.AUTHORS);

//   //here the map adds the title property into the final summaries array
//   return (
//     schema(constant.SUMMARIES)
//       ?.map((item, index) => ({
//         ...item,
//         title: titles[index],
//         author: authors[index][constant.AUTHOR]
//       }))
//       //filter is to filter out the item with matches string
//       ?.filter((item) => item.summary.includes(search))
//   );
// }

const isMappedAlready = (array, item) =>
  array.indexOf(item) === -1 ? false : true;

function preProcessigStrings(summaries, titles, authors) {
  let hashMap = {};
  let summaryArray = summaries?.map((item) => item.summary);
  // eslint-disable-next-line no-unused-expressions
  summaryArray?.map((summaryString, index) =>
    summaryString.split(' ').map((word) => {
      if (hashMap[word]) {
        if (!isMappedAlready(hashMap[word]['titles'], titles[index]))
          hashMap[word]['titles'].push(titles[index]);
        if (!isMappedAlready(hashMap[word]['author'], authors[index])) {
          hashMap[word]['author'].push(authors[index]);
          hashMap[word]['summary'].push(summaries[index]);
        }
      } else {
        hashMap[word] = {
          titles: [titles[index]],
          author: [authors[index]],
          summary: [summaries[index]]
        };
      }
    })
  );
  return hashMap;
}

const keywordsFromText = (search) => {
  const words = search.split(' ');
  return words;
};

function searchBooksByCharacters(search) {
  let result;
  const keywords = keywordsFromText(search);
  const titles = schema(constant.TITLES);
  const authors = schema(constant.AUTHORS);
  const hashMap = preProcessigStrings(
    schema(constant.SUMMARIES),
    titles,
    authors
  );
  keywords.map((word) => {
    if (hashMap[word]) {
      result = hashMap[word]?.titles.map((title, index) => {
        const author = hashMap[word]?.author[index];
        const summary = hashMap[word]?.summary[index];
        return { title, author: author[constant.AUTHOR], ...summary };
      });
    }
  });
  return result ? result : [];
}
export default searchBooksByCharacters;
