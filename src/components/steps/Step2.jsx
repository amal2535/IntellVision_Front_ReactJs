import React from 'react';
import { ArrowRight ,ArrowLeft} from "lucide-react";
import { useState,useContext } from "react";
import Step3 from './Step3';
import { homecontext } from "../../HomeContext";




export default function Step2() {
    const {setStepToTrue}=useContext(homecontext)


  return (
    <div>
    <p className=" items-center justify-center  text-teal-400 font-extrabold text-3xl mt-9">
                   Let't Choose The Model
        </p>

        <p className=" items-center justify-center  text-gray-500 font-medium text-lg mt-4">
                   You can choose one or more !
        </p>

        <div className="flex gap-32">

            <iframe src="https://lottie.host/embed/62d2d225-562b-4e3d-9de6-061aa2cd07e1/u0LnMQo9nk.json" className="h-96 w-96 "></iframe>
            <div className="flex flex-col gap-24  items-start justify-center w-full  text-lg ml-32">
                <div className='flex gap-16'>
                <div className="flex gap-2">
                   <input
                    className="  h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400  checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer"
                    type="checkbox"
                    value="1"
                    id="checkboxDefault1" />
                    <label
                    className="text-black  font-medium hover:cursor-pointer" htmlFor="checkboxDefault1">
                    CNN
                    </label>
                    
                </div>

                <div className="flex gap-2">
                    <input
                    className="  h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400  checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer"
                    type="checkbox"
                    value="2"
                    id="checkboxDefault2" />
                    <label
                    className="text-black font-medium hover:cursor-pointer" htmlFor="checkboxDefault2">
                     EfficientNet
                    </label>
                </div>
                <div className="flex gap-2">
                    <input
                    className="  h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400  checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer"
                    type="checkbox"
                    value="2"
                    id="checkboxDefault3" />
                    <label
                    className="text-black font-medium hover:cursor-pointer" htmlFor="checkboxDefault3">
                    VGG
                    </label>
                </div>
                </div>
                
                <div className='flex gap-16'>
                <div className="flex gap-2">
                    <input
                    className="  h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400  checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer"
                    type="checkbox"
                    value="2"
                    id="checkboxDefault4" />
                    <label
                    className="text-black  font-medium hover:cursor-pointer" htmlFor="checkboxDefault4">
                    ResNet
                    </label>
                </div>
                <div className="flex gap-2">
                    <input
                    className="  h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400  checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer"
                    type="checkbox"
                    value="2"
                    id="checkboxDefault5" />
                    <label
                    className="text-black  font-medium hover:cursor-pointer" htmlFor="checkboxDefault5">
                    MobileNet
                    </label>
                </div>
                <div className="flex gap-2">
                    <input
                    className="  h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400  checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer"
                    type="checkbox"
                    value="2"
                    id="checkboxDefault5" />
                    <label
                    className="text-black  font-medium hover:cursor-pointer" htmlFor="checkboxDefault5">
                    LSTM
                    </label>
                </div>
                </div>
           
                
            </div>           
              
        </div>
  
        <div className="flex gap-8 justify-between mt-[11rem] mx-2  ">
            <button onClick={()=>setStepToTrue(1)} className=" hover:text-white rounded-md bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft/>&nbsp;Previous</button>
            <button onClick={ ()=>setStepToTrue(3)} className="rounded-md bg-teal-400 px-8 py-2 border-2 border-teal-400  text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight/></button>
        </div>
     
    </div>
  );
}
