import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "./itemCategory";
import { clearCart } from "../../utils/cartSlice";


const Cart=()=>{

    const cartItems=useSelector((store) => store.cart.items);
    

     const dispatch=useDispatch();
    const handleClear=()=>{
          dispatch(clearCart());
    }
    if (cartItems.length === 0) {
        return <h1 className="text-center my-auto mx-auto font-bold text-4xl  mt-28">Plz Add Something 🍕🚀</h1>;
      }

     return(
         <div>
             <h1 className="m-8 font-bold text-orange-600 text-center text-6xl">CART</h1>
             <div className="w-6/12 m-auto">
                 <button className="bg-orange-500 text-white font-bold rounded-xl p-2 text-right mb-4 " onClick={handleClear}>ClearCart</button>
                 <ItemCategory  items={cartItems}/>
             </div>
         </div>
     )
}

export default Cart;