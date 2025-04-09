import React from "react";

import { CiTrophy } from "react-icons/ci";
import { bebas } from "../UI/fonts";

export const Logo = () =>{
    return(
<div className={`${bebas.className} flex flex-row items-center leading-none text-white`}>
    <CiTrophy className="h-20 w-20"/>
    <p className="text-[30px] ml-3">COPA ATAHUALPA</p>
    </div>
    )  
};
