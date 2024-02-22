import React from "react";

import ReactDOM from "react-dom/client";

import FoodData from "./project-1/FoodData";
import Routing from "./project-2/Routing";
import RoutingCrud from "./project-3/RoutingCrud";

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        {/* ---------   Project-1 (finding item by using barcode)  -------------- */}
        {/* <FoodData></FoodData> */}


        {/* -----------     Project-2 (e commarce web page)  ---------------- */}
        <Routing></Routing>


        {/* -----------     Project-3  (storing user data) ----------------- */}
        {/* <RoutingCrud></RoutingCrud> */}
    </div>
)