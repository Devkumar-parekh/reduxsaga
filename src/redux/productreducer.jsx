const initialstate = [];
export const productreducer = (state = initialstate, action) => {
  switch (action.type) {
    // case "productlist":
    //   return [...state];
    case "setproductlist":
      console.log(action.data);
      return [...action.data];
    default:
      return state;
  }
};
