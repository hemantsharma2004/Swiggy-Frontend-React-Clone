import {CON_URL} from "../../utils/constants";
import { Link } from "react-router-dom";

const Card=(props)=>{
    const {resData}= props;

     const{
        cloudinaryImageId,
         name,
         costForTwo,
         cuisines,
         avgRating,
         id,
     }=resData?.info;

     return(
        <Link to={"restaurant/" + id}><div className="card w-[190px] bg-gray-300 rounded-lg mr-5">
             <div >
                <img className="w-[180px] h-[150px] pl-3 pt-3  mb-2  " src={CON_URL + cloudinaryImageId} /> 
             </div>

             <div className="text-left pl-3 pb-2">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <h2 className="w-[95%] overflow-hidden">{cuisines.join(",")}</h2>
                    <p>{avgRating} ⭐</p>
                    <p> {costForTwo}</p>
             </div>
         </div>
         </Link>
     )
}

 export const WithPromotedLabel=(Card)=>{
     return(props)=>{
         return(
            <div>
                 <label className="bg-black text-white p-2 m-1 absolute rounded-xl">open</label>
                 <Card {...props}/>
            </div>
         )
     }
 }


 
 

export default Card;