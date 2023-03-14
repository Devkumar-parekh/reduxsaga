export const productList = () => {
  return {
    type: "productlist",
  };
};

export const productSearch = (query) => {
  return {
    type: "productSearch",
    query,
  };
};
// export const setproductlist = (data) => {
//   console.log(data);
//   return {
//     type: "setproductlist",
//     data,
//   };
// };
