import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => {
    return state.cartReducer;
  });
  const total =
    cartData.length &&
    cartData.map((val) => val.price).reduce((ttl, curr) => ttl + curr);
  const getData = () => {
    return cartData.map((val, index) => {
      return (
        <div key={`cart${index}`} className="row m-2">
          <div className="col-md-8 border">
            <h5>{val.title}</h5>
          </div>
          <div className="col-md-4 border">
            <span>{val.price}</span>
          </div>

          {/* {setTotal(5)} */}
        </div>
      );
    });
  };
  return (
    <>
      <div className="container">
        <div className=" row mt-5">
          <div className="col-md-8">
            <div className="border p-3">
              <div className="row m-2">
                <div className="col-md-8 border">
                  <h3>Title</h3>
                </div>
                <div className="col-md-4 border">
                  <h3>Price</h3>
                </div>

                {/* {setTotal(5)} */}
              </div>
              {getData()}
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="border p-3">
              <h3>Bill</h3>
              <div className="border my-2 p-2 d-flex justify-content-between">
                <span>Amount:</span>
                <span>{total}</span>
              </div>
              <div className="border my-2 p-2 d-flex justify-content-between">
                <span>Discount:</span>
                <span>{total / 10}</span>
              </div>
              <div className="border my-2 p-2 d-flex justify-content-between">
                <span>Total:</span>
                <span>{total - total / 10}</span>
              </div>
              <div className="border my-2 p-2 d-flex justify-content-between text-danger">
                <span>Cash On Delivery</span>
              </div>
              <div className="py-2 ">
                <button className="btn btn-danger">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
