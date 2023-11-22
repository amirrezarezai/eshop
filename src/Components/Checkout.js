import BasketProducts from "./BasketProducts";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div>
      <div className="checkout-nav">
        <div className="left-content">
          <div className="banner">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="banner" width='100%' />
          </div>
          <div className="checkout-title">
            <h2>Your Shopping Basket</h2>
            <hr/>
          </div>
        </div>
        <div className="right-content">
            <Subtotal />
        </div>
      </div>
      <div className="checkout-content">
        <BasketProducts />
      </div>
    </div>
  );
};
export default Checkout;
