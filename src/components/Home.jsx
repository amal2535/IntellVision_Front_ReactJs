import React from "react";
import Footer from "./Footer.jsx";
import Step1 from "./steps/Step1.jsx";
import Step0 from "./steps/Step0.jsx";
import Step2 from "./steps/Step2.jsx";
import Step3 from "./steps/Step3.jsx";
import Step4 from "./steps/Step4.jsx";
import { useState ,useContext} from "react";
import Navbar from "./Navbar.jsx";
import { homecontext } from "../HomeContext.jsx";


function Home() {
    const {getStepStatus,steps}=useContext(homecontext);

    const scrollUnderButton = () => {
        const button = document.getElementById('scrollButton'); 
        const buttonPosition = button.getBoundingClientRect().bottom; 
        const scrollPosition = buttonPosition + 100;
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth' 
        });
      };
  return (
    <div>
        <div className="h-[100rem] ">
            
            <div className="flex flex-col items-center w-full gap-4">
                 
                <div className="w-full h-[45rem] bg-[url('./images/img.jpg')] bg-cover bg-center shadow-lg shadow-cyan-950 ">
                       <Navbar/>
                        <div className="flex flex-col justify-center items-center">
                            <p className="justify-center items-center bg-gradient-to-r from-slate-400 via-teal-400 to-teal-700  text-transparent bg-clip-text font-bold text-5xl mt-32">
                                    Discover the Power of Computer Vision
                            </p>
                            <p className="font-semibold text-lg text-gray-400 flex flex-col my-16">
                             Dive into the world of image classification and explore the endless possibilities of AI technology.
                            <p>With just a few clicks, you can train and test your own models.</p> 
                            </p>
                            <button id="scrollButton" onClick={scrollUnderButton} className="rounded-md bg-teal-400 px-8 py-2 mt-12 text-white text-lg font-semibold flex  items-center hover:bg-teal-600 shadow-lg shadow-teal-600">Start Your Journey</button>
                        </div>
                </div>
                
                <div className="mt-16 w-[80rem] h-[50rem] ">
                    {getStepStatus(0) && <Step0/>}
                    {getStepStatus(1) && <Step1/>}
                    {getStepStatus(2) && <Step2/>}
                    {getStepStatus(3) && <Step3/>}
                    {getStepStatus(4) && <Step4/>}



                </div>
            </div>
           

        </div> 
   
        <Footer/>
    </div>
 

  );
}

export default Home;
