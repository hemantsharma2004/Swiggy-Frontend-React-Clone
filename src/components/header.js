import { useState } from "react";
import useOnlineStatus from "../../utils/useOnline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header=()=>{
     const [Click , setClick]= useState("login");

      const Online = useOnlineStatus();

      const cartItems=useSelector((store) => store.cart.items);

    return(

         <div className="parent flex justify-between p-2 m-2 items-center border-2  border-orange-500 rounded-2xl">
             <div className="left-child w-[130px]">
                    <img src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" ></img>
             </div>
 
             <div className="right-child">
                  <ul className="flex text-lg">
                  <li className="mr-3">{Online ? "🟢" : "🔴"}</li>
                     <li className="mr-4">home</li>
                     <li className="mr-4">contact</li>
                     <li className="mr-4">about</li>
                     <li className="mr-4">
                        <Link to={"/cart"}>🛒({cartItems.length} items)</Link>
                        </li>

                     <button className="bg-orange-500 text-white p-2 rounded-xl mr-4" onClick={()=>{
                         const buttons="logout";
                         setClick(buttons);
                     }}>{Click}</button>
                  </ul>
             </div>
                        
         </div>
    )
}

export default Header;