import ItemCategory from "./itemCategory";
import { useState } from "react";

const RestaurantCategory=({data , showItems , setShowIndex})=>{
    console.log("data",data);
    

     const handleCLick=()=>{
           setShowIndex(); 
     }

     return(
         <div className="w-6/12 mx-auto bg-gray-300 mb-7 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4" onClick={handleCLick} >
                   <h1 className="text-xl  p-2 font-bold mb-1">{data.title} ({data.categories[0].itemCards.length}) </h1>
                   <h1 className="">⬇️</h1>
              </div>
             
       {showItems && <ItemCategory  items={data.categories[0].itemCards}/>}
         </div>
     )
}

export default RestaurantCategory;