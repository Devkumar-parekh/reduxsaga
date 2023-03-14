const initialstate = [];
export const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      console.log(action.payload);
      state = state.filter((val) => val.id != action.payload);
      return state;
    //   return state.slice(0, state.length - 1);
    default:
      return state;
  }
};
