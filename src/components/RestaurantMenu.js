import { useParams, } from "react-router-dom";
import useRestaurantsMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
   const {Id} = useParams();
    
     const resInfo= useRestaurantsMenu(Id);

      const [ShowIndex , setShowIndex] = useState(1);
    

    if(resInfo === null)
    {
       return <h1 className="text-lg font-serif text-center">it will take sometime</h1>
    }

     const{
       name,
       cuisines,
       areaName,
       costForTwoMessage,
       avgRating,
     } = resInfo?.cards[0]?.card?.card?.info;
      
     const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      

      const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
      c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"));
       console.log("hello", categories);
         
   return (
      <div>
         <div className="menu flex justify-between items-center w-6/12 m-auto text-lg mb-10 mt-8">

            <div className="left">
               <h1 className="font-bold text-2xl uppercase">{name}</h1>
               <p>{cuisines.join(",")}</p>
               <h3 className=" font-semibold ">{costForTwoMessage}</h3>
               <p>{areaName}</p>

            </div>

            <div className="right">
               <p>{"⭐" + avgRating}</p>
            </div>
         </div>

         <div className="menu-list">
           
               <div>
                {
                   categories.map((category , index)=>
                    <RestaurantCategory  data={category.card.card} showItems={index === ShowIndex ? true :false}
                    setShowIndex={()=> setShowIndex(index)} />)
                }
               </div>

        
         </div>
         
        
      
      </div>

   )
}



export default RestaurantMenu;