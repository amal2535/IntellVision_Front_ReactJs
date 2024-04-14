import React from 'react';
import { homecontext } from "../../HomeContext";
import { useState,useContext } from "react";
import { ArrowRight ,ArrowLeft} from "lucide-react";
import cat from "../../images/cat.jpeg"


export default function Step3() {
  const {setStepToTrue}=useContext(homecontext)
 


  return (
    <div className='flex flex-col justify-center  items-center gap-9 '>
        <div className='flex gap-4  items-center '>
            <p className="flex gap-4 items-center justify-center text-teal-400 font-extrabold text-3xl mt-9">
                Let's View the Results 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m3 15 2 2 4-4"/></svg>
            </p>
    
        </div>
        <br></br>

        <div className='flex justify-center items-center gap-8'>
          <img src={cat} alt='img' width={150} height={150}></img>
          <div className='flex flex-col'>
          <div>
            <div class="mb-1 text-start text-md font-normal">Cat</div>
              <div class="w-80 bg-gray-300 rounded-full ">
                <div class="bg-teal-400 w-64 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 88%</div>
              </div>
          </div>
              
          <div>
            <div class="mb-1 text-start text-md font-normal">Dog</div>
            <div class="w-80 bg-gray-300 rounded-full ">
              <div class="bg-teal-400 w-12 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 12%</div>
            </div>
          </div>
          </div>


          

        </div>
      <div className="overflow-x-auto mx-4">
        <div className="inline-block max-w-full py-2">
          <div className="overflow-hidden">
            <table className="text-left text-md font-normal">
              <thead className=" text-gray-400  border-b-2 ">
                <tr>
                  <th scope="col" className="px-6 py-4">Model</th>
                  <th scope="col" className="px-6 py-4">Predicted Class</th>
                  <th scope="col" className="px-6 py-4">Probability</th>
                  <th scope="col" className="px-6 py-4">Accuracy</th>
                  <th scope="col" className="px-6 py-4">Score F1</th>

                </tr>
              </thead>
              <tbody className=' font-normal text-black'>
                <tr className="border-b-2">
                  <td className="whitespace-nowrap text-start px-6 py-4 font-semibold ">CNN</td>
                  <td className="whitespace-nowrap px-6 py-4 ">Cat</td>
                  <td className="whitespace-nowrap px-6 py-4">88%</td>

                  <td className="whitespace-nowrap px-6 py-4 ">90.5</td>
                  <td className="whitespace-nowrap px-6 py-4">0.88</td>
                </tr>
                <tr className="border-b-2">
                  <td className="whitespace-nowrap text-start px-6 py-4 font-semibold">RNN</td>
                  <td className="whitespace-nowrap px-6 py-4 ">Dog</td>
                  <td className="whitespace-nowrap px-6 py-4">50%</td>

                  <td className="whitespace-nowrap px-6 py-4 ">60.3</td>
                  <td className="whitespace-nowrap px-6 py-4">0.55</td>
                </tr>
                <tr className="border-b-2">
                  <td className="whitespace-nowrap text-start px-6 py-4 font-semibold ">MobileNet</td>
                  <td className="whitespace-nowrap px-6 py-4 ">Cat</td>
                  <td className="whitespace-nowrap px-6 py-4">88%</td>

                  <td className="whitespace-nowrap px-6 py-4">95.6</td>
                  <td className="whitespace-nowrap px-6 py-4">0.90</td>
                </tr>
                <tr className="border-b-2">
                  <td className="whitespace-nowrap text-start px-6 py-4 font-semibold">MobileNet</td>
                  <td className="whitespace-nowrap px-6 py-4 ">Cat</td>
                  <td className="whitespace-nowrap px-6 py-4">88%</td>

                  <td className="whitespace-nowrap px-6 py-4 ">95.6</td>
                  <td className="whitespace-nowrap px-6 py-4">0.90</td>
                </tr>
             
               
             
              </tbody>
            </table>
          </div>
        </div>
      </div>


        <div className="flex gap-8 justify-between  px-8 w-full">
            <button onClick={()=>setStepToTrue(2)} className=" hover:text-white rounded-md bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft/>&nbsp;Previous</button>
            <button onClick={()=>setStepToTrue(4)} className="rounded-md bg-teal-400 px-8 py-2 border-2 border-teal-400  text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight/></button>
        </div>
        
    </div>
  );
}
