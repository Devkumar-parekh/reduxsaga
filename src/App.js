import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/action";
import { productList } from "./redux/productaction";
import { productSearch } from "./redux/productaction";
function App() {
  const [searchV, setsearchV] = useState();
  useEffect(() => {
    dispatch(productList());
  }, []);
  const cartData = useSelector((state) => {
    return state.cartReducer;
  });
  const productsData = useSelector((state) => {
    return state.productreducer;
  });
  const dispatch = useDispatch();
  const displayData = () => {
    return productsData.map((val, index) => {
      return (
        <div className="rounded p-2 col-md-4" key={`product${index}`}>
          <div className="border rounded border-dark m-3 p-3">
            <h3>{val.title}</h3>
            <span>Price: {val.price}</span>
            <p>{val.description}</p>
            <p>{val.category}</p>
            {/* <img src={val.images[0]} alt="" className="rounded img-fluid" /> */}
            <img
              src={val.thumbnail}
              alt=""
              className="img-thumbnail rounded img-fluid"
            />
            <br />
            <button
              className="btn btn-success my-2"
              onClick={() => {
                dispatch(addToCart(val));
              }}
            >
              Add to cart
            </button>
            <br />
            <button
              className="btn btn-danger my-2"
              onClick={() => {
                dispatch(removeFromCart(val.id));
              }}
            >
              Remove from cart
            </button>
          </div>
        </div>
      );
    });
  };
  console.log(cartData);
  return (
    <div className="App">
      <div className="container my-5 px-4">
        <span className="position-fixed p-3 rounded-bottom bg-dark">
          <input
            className=""
            value={searchV}
            onChange={(e) => {
              dispatch(productSearch(e.target.value));
            }}
            placeholder="Search Product..."
          />
        </span>
        <div className="row gy-5 gx-5">{displayData()}</div>
      </div>
    </div>
  );
}

export default App;
