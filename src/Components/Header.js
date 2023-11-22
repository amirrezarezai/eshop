import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
const Header = () => {
  const { cartState, cartDispatch } = useCart();
  return (
    <div className="header">
      <Link to="/" style={{textDecoration:'none',color:'white'}}>
        <div className="header_logo">
          <StorefrontIcon
            className="header_logoImage"
            fontSize="large"
            style={{ color: "#EB8B17" }}
          />
          <div
            className="header_ImageTitle"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginTop: "0.3rem",
            }}
          >
            eShop
          </div>
        </div>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon
          style={{ backgroundColor: "#EB8B17", color: "black" }}
          className="header_SearchIcon"
        />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <div className="lineOne">Hello Guest</div>
          <div className="lineTwo">Sign In</div>
        </div>
        <div className="nav_item">
          <div className="lineOne">Your</div>
          <div className="lineTwo">Shop</div>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <ShoppingBasketIcon
              style={{ margin: "0.3rem", color: "#EB8B17" }}
            />
            <span className="basket_number" style={{ color: "white" }}>
              {cartState.cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
