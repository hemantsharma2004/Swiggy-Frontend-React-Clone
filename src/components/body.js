import Card from "./card";
import resobj from "../../utils/mockdata";
import { useState, useEffect } from "react";
import { WithPromotedLabel } from "./card";
import useOnlineStatus from "../../utils/useOnline";

const Body=()=>{

     const [ListOfRestaurant ,setListOfRestaurant] = useState(resobj);
     const [SearchText , setSearchText]= useState("");

      const Online=useOnlineStatus();

      if(Online == false) return <h1> sorry , plz check your network</h1>

      const PromotedCard=WithPromotedLabel(Card);

       useEffect(()=>{
          fetchData();
       },[]);
 

          const fetchData = async () => {
          const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4410726&lng=77.0527716&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          const json= await data.json();
        
           setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
      }

     return(
      
         <div className="parent_of_all mt-10  px-20">

            <div className="button_section flex justify-evenly items-center  mb-10">
                <div>
                    <button className="bg-orange-500 text-white rounded-xl p-2 font-bold" onClick={()=>{
                         const filter_button=ListOfRestaurant.filter((res)=>
                         res.info.avgRating > 4)
                         setListOfRestaurant(filter_button);
                    }} >Top Rated Restaurant</button>
                </div>

                <div className="search ">
          <input type="text" value={SearchText} placeholder="search"  className="search-box pl-1 outline-double w-60 p-1 rounded-lg mr-1" onChange={(e) => {
            setSearchText(e.target.value);
          }} />

          <button className=" bg-orange-600 p-2 rounded-lg font-bold text-white" onClick={() => {
            const set = ListOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(SearchText.toLowerCase()))

            setListOfRestaurant(set);
          }}>Search</button>

        </div>
            </div>

          <div className="card-contaner flex justify-evenly items-center flex-wrap mb-5">
              
          {
    ListOfRestaurant && ListOfRestaurant.map((restaurant) => (
      restaurant.info.isOpen
        ? <PromotedCard key={restaurant.info.id} resData={restaurant} />
        : <Card key={restaurant.info.id} resData={restaurant} />
    ))
  }
              
          </div>

         </div>
     )
}

export default Body;
