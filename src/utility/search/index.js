import dataByProperty from "./data";
import constant from "./constant";

// get the data by property
const schema = (key) => {
  return dataByProperty(key);
};

// search function
function searchCharacters(search) {
  // gathers the titles and authors from the data JSON.
  const titles = schema(constant.TITLES);
  const authors = schema(constant.AUTHORS);

  //here the map adds the title property into the final summaries array
  return (
    schema(constant.SUMMARIES)
      ?.map((item, index) => ({
        ...item,
        title: titles[index],
        author: authors[index][constant.AUTHOR],
      }))
      //filter is to filter out the item with matches string
      ?.filter((item) => item.summary.includes(search))
  );
}
export default searchCharacters;
