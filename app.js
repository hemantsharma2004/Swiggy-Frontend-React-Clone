import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/header";
import Body from "./src/components/body";
import {createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import Error from "./src/components/error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/cart";

const App=()=>{
     return(   
          <Provider store={appStore}>
          <div>
               <Header />
               <Outlet />
          </div>
          </Provider>
     )
};

const approuter= createBrowserRouter([
     {
          path:"/",
          element:<App />,
          children:[
               {
                    path:"/",
                    element:<Body />, 
               },
               {
                    path:"/about",
                    element:<About />
               },
               {
                    path:"/contact",
                    element:<Contact />
               },
               {
                    path:"/restaurant/:Id",
                    element:<RestaurantMenu />
               },
               {
                    path:"/cart",
                    element:<Cart />
               },
             
          ],
          errorElement:<Error />
     },
]);

 


const root=ReactDOM.createRoot(document.getElementById("rotie"));
root.render(<RouterProvider  router={approuter} />);