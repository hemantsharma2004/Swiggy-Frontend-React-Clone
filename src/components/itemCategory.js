import { useDispatch } from "react-redux";
import { CON_URL } from "../../utils/constants";
import { addCart } from "../../utils/cartSlice";

const ItemCategory=({items})=>{

    console.log("items",items);

      const dispatch=useDispatch();
    const handleClickAdd=(item)=>{
          dispatch(addCart(item));
    }
     return(
        <div>
            {
                 items.map((item)=>
                  <div className="parent flex justify-between items-center border-b-4 mb-5">
                        <div className="mb-5">
                        <h2 className="text-sm font-serif font-bold">{item.card.info.category}</h2>
                            <p className="w-[400px] text-left">{item.card.info.description}</p>
                            <h3 className="text-lg font-bold">--${item.card.info.price/100}</h3>
                        
                        </div>

                        <div>
                             <button className="bg-white font-extrabold   px-2 py-1 absolute my-[109px] mx-[70px] rounded-lg text-green-400 " onClick={()=>handleClickAdd(item)}>ADD +</button>
                            <img src={CON_URL + item.card.info.imageId}  className="w-[220px] h-[150px]  rounded-lg py-2 px-2 mb-3"/>
                        </div>


                  </div>  )
            }

             
        </div>
     )
}
export default ItemCategory;