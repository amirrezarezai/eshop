import { useCart } from "../CartContext"; 

const Subtotal = () =>{
    let price = 0
    const { cartState, cartDispatch } = useCart();
    return(
        <div style={{backgroundColor:'#ddd',height:'15rem',padding:'1.2rem',fontSize:'1.5rem',border:'0.2rem solid #7D7E75'}}>
        <p>Subtotal ({cartState.cart.length} items): <span style={{fontWeight:'bold'}}> ${
            cartState.cart.map(item =>{
                price += item.price
            })
        }{price}</span></p>
        <form>
        <input type="checkbox" />
        <label style={{fontSize:'1.2rem'}}>This order contains a gift</label>
        </form>
        <button style={{backgroundColor:'#EB8B17',border:'none',marginTop:'5rem',width:'100%',height:'2rem'}}>Proceed to Checkout</button>
        </div>
    )
}
export default Subtotal