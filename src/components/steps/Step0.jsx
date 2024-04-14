import React,{useContext} from 'react';
import cifar10 from "../../images/cifar10.png"
import fashion from "../../images/fashion.png"
import {ArrowRight} from 'lucide-react'
import { homecontext } from "../../HomeContext";


export default function Step0() {

    const {setStepToTrue}=useContext(homecontext)

  return (
    <div>
    
        <h1 class="mt-16 text-4xl font-bold bg-gradient-to-t from-teal-400 via-teal-700 to-teal-900  text-transparent bg-clip-text ">Which dataset do you want to use?</h1>
        
        <ul class="grid gap-12 grid-cols-2 mt-12">
            <li>
                <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer"  />
                <label for="hosting-small" class="inline-flex items-center p-5  shadow-lg shadow-gray-800  rounded-lg cursor-pointer peer-checked:border-2 peer-checked:scale-105 peer-checked:border-teal-400  hover:bg-gray-700 text-gray-400 bg-gray-800  ">                           
                    <div class=" items-center justify-center">
                        <div class="w-full text-2xl font-bold text-white">Cifar-10</div>
                        <div class="text-center w-96 mt-4">
                            The CIFAR-10 dataset consists of 60000 32x32 colour images in 10 classes, with 6000 images per class. There are 50000 training images and 10000 test images.
                        </div>
                        <br></br>
                        <img alt='img' src={cifar10} width={300} className='mx-12' ></img>
                    </div>
                    
                </label>
                <a href='https://www.cs.toronto.edu/~kriz/cifar.html' className="rounded-md hover:shadow-lg hover:shadow-teal-700 bg-teal-400 mx-32 px-8 py-2 mt-8 text-teal-950 text-lg font-semibold flex justify-center items-center gap-3 ">
                    Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                
                </a>
            </li>
            <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
                <label for="hosting-big" class="inline-flex items-center p-5 shadow-lg shadow-gray-800 rounded-lg cursor-pointer  peer-checked:border-2 peer-checked:scale-105 peer-checked:border-teal-400 hover:bg-gray-700 text-gray-400 bg-gray-800 ">                           
                    <div class="block items-center justify-center">
                        <div class="w-full text-2xl font-bold text-white">Fashion-Mnist</div>
                        <div class="text-center w-96 mt-4">
                        Fashion-MNIST dataset consists of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes.
                         </div>
                        <br></br>
                        <img alt='fashion' src={fashion} width={400} ></img>
                    </div>
                   
                </label>
                <a href='https://www.kaggle.com/datasets/zalando-research/fashionmnist' className="rounded-md hover:shadow-lg hover:shadow-teal-700 bg-teal-400 mx-32 px-8 py-2 mt-8 text-teal-950 text-lg font-semibold flex justify-center items-center gap-3 ">
                    Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                
                </a>
            </li>
        </ul>
            <div className='w-full flex  justify-end '>
                <button onClick={()=>setStepToTrue(1)} className="rounded-md bg-teal-400 border-2 border-teal-400 px-8 mx-4 py-2 mt-8 self-end text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight/></button>
            </div>

    
    </div>
  );
}
