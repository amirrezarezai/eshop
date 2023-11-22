import {useCart}  from '../CartContext';

const BasketProducts = () =>{
    const { cartState, cartDispatch } = useCart();
    const removeFromCart = (item) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: item });
      };
    return(
        <div>
        {cartState.cart.map((item) => (
            <div className='basket-products'>
                 <div className='left-content'>
                    <img src={item.image} width='50%' />
                 </div>
                 <div className='right-content'>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.star}</p>
                    <button style={{backgroundColor:'#EB8B17'}} onClick={()=>removeFromCart(item)}>Remove from Cart</button>
                 </div>
            </div>
        ))}
        </div>
    )
}
export default BasketProducts