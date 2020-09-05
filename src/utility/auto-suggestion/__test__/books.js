import dataByProperty from '../../search/data';
import constant from '../../search/constant';

export const initializeBookDatabase = () => {
  const titles = dataByProperty(constant.TITLES);
  const authors = dataByProperty(constant.AUTHORS);
  return dataByProperty(constant.SUMMARIES)?.map((item, index) => ({
    ...item,
    title: titles[index],
    author: authors[index][constant.AUTHOR]
  }));
};

export const clearBookDatabase = () => null;
