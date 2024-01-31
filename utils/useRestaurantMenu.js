import { useState, useEffect } from "react";


 const useRestaurantsMenu=(Id)=>{
    
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
       fetchMenu();
    }, [])
 
    const fetchMenu = async () => {
       const datas = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId="+ Id) ;
       const jsons = await datas.json();
       console.log(jsons);
      
       setresInfo(jsons.data);
    }

     return resInfo;
 }
 export default useRestaurantsMenu;