import fetch from 'isomorphic-unfetch';

const getLayoutData = async () => {
  const res = await fetch('../data/layout.json');
  const data = await res.json();
  console.log(data);
  return data;
};

export default getLayoutData;