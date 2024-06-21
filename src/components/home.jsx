import React from "react";
import Headerr from "./Header";
import { PageIcon } from "./icons";
import { Html } from "./html";
import { Css } from "./css";
import { Java } from "./java";
import { Type } from "./type";
import { Tail } from "./tail";
import { Linkd } from "./linkedin";
import { Github } from "./github";
import GlowingBorderCard from "./glowcard";
import Bgvid from "./backgroundvid";
import Footer from "./footer";







export const Home = () => {
    return (
<body>

<Bgvid/>

<div className="bg-video">
    
<Bgvid/>
    
    
    
    


    
    
<Headerr /> 


<div className="container mx-auto py-8 relative z-10">
  


        <div class="grid grid-cols-1 md:grid-cols-2  gap-8 ">
        
           
            <div class=" rounded-lg  text-center content-center h-auto p-6">
            <h1 className=" text-black text-6xl font-bold">Front-End Developer</h1> 
            <h1 className="p-10 text-2xl"> I know what I'm doing and I'm ready to work.</h1>
           <div className="flex justify-center"> <a href="https://www.linkedin.com/in/tyler-altenburg-0259832a9/"><Linkd/></a>
            <a href="https://github.com/tddev123"><Github/></a></div>
            </div>
            
            <div class=" rounded-lg  p-6 h-auto relative overflow-hidden">
                
                <div class="absolute inset-0 flex justify-center items-center">
                    <GlowingBorderCard/>


    </div>
                
                
            </div>
            
            <div class="col-span-2  rounded-lg p-6 content-center">
     
                
                <div className="items-center flex justify-center">
<PageIcon /> 
<div><Html/></div><div> <Css /></div> <div><Java/></div> <div><Type/></div><div><Tail/></div> </div>
                
            </div>
            
            
            
            
         
        </div>
    </div>
</div>


<Footer/>
</body>


    )};
