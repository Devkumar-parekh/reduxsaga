import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const cartData = useSelector((state) => state.cartReducer);
  return (
    <>
      <div className="p-5 sticky-top text-bg-dark bg-dark">
        <div className="container">
          <NavLink to="/" className="mx-5 text-bg-dark text-decoration-none">
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className="float-end text-bg-dark text-decoration-none"
          >
            <span className="rounded bg-light text-bg-light p-2">
              🛒 {cartData.length}
            </span>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
};
export default Layout;
