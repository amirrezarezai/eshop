import { data } from "../data";
import {useCart}  from '../CartContext';

const Home = () =>{
    const { cartState, cartDispatch } = useCart();
    const addToCart = (item) => {
        cartDispatch({ type: 'ADD_TO_CART', payload: item });
      };
    return(
        <div className="home">
            <img src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg" width='100%'  />
            <div className="data">
            {data.map((item)=>
                    <div className={`items item${item.id}`}>
                        <p>{item.title}</p>
                        <p style={{fontWeight:'bold'}}>${item.price}</p>
                        <p>{item.star}</p>
                        <img src={item.image} alt="image" width='20%' style={{margin:'1px 40%'}} />
                        <button onClick={()=>addToCart(item)}  className="btn-addToCart">Add to Basket</button>
                    </div>  
            )}
            </div>
        </div>
    )
}
export default Home