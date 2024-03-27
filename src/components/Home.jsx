import React from "react";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx";
import { ImageIcon, ArrowRight } from "lucide-react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Home() {
  return (
    <div>
        <Navbar/>
        <div className="h-[100rem] flex flex-col items-center w-full gap-4">

        <div className="mt-32">
                  <label for="dropzone-file" class="flex flex-col items-center justify-center w-[30rem] h-64 border border-black rounded-lg cursor-pointer bg-[#ececec]  hover:bg-[#ececec]/70 ">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <ImageIcon className="h-12 w-12"/>
                          <p class="mb-2 text-lg text-black"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-sm text-black">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                  </label>
          </div>
          <button className="rounded-md bg-teal-400 px-8 py-2 text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 shadow-lg shadow-teal-600">Continue&nbsp;<ArrowRight/></button>

        <div className="w-full mt-16">
            <ol class="flex items-center justify-center ml-64">
              <li class="relative w-full mb-6">
                  <div class="flex items-center">
                      <div class="z-10 flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full ring-0 ring-teal-400  sm:ring-8 shrink-0">
                          <svg class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                          </svg>
                      </div>
                      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3">
                      <h3 class="font-semibold text-lg w-16  text-teal-500">Step 1</h3>
                  </div>
              </li>
              <li class="relative w-full mb-6">
                  <div class="flex items-center">
                      <div class="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-[#D9D9D9] bg-orange-500 sm:ring-8   shrink-0">
                         
                      </div>
                      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3">
                      <h3 class="font-semibold text-lg w-16   text-teal-500">Step 2</h3>
                  </div>
              </li>
              <li class="relative w-full mb-6">
                  <div class="flex items-center">
                      <div class="z-10 flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full ring-0 ring-[#D9D9D9] sm:ring-8  shrink-0">
                          
                      </div>
                      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3">
                      <h3 class="font-semibold text-lg w-16  text-teal-500">Step 3</h3>
                  </div>
              </li>
              <li class="relative w-full mb-6">
                  <div class="flex items-center">
                      <div class="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-[#D9D9D9] bg-orange-500 sm:ring-8  shrink-0">
                          
                      </div>
                      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>

                  </div>

                  <div class="mt-3">
                      <h3 class="font-semibold text-lg w-16  text-teal-500">Step 4</h3>

                  </div>
              </li>

              <li class="relative w-full mb-6">

                  <div class="flex items-center">

                      <div class="z-10 flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full ring-0 ring-[#D9D9D9] sm:ring-8  shrink-0">
                          
                      </div>

                  </div>
                  <div class="mt-3">
                      <h3 class="font-semibold text-lg w-16  text-teal-500">Step 5</h3>
                  </div>
              </li>
          </ol>
      </div>

            <div>
                <p className="text-teal-400 font-extrabold text-xl">
                    Choose Model
                </p>
                <iframe src="https://lottie.host/embed/62d2d225-562b-4e3d-9de6-061aa2cd07e1/u0LnMQo9nk.json" className="h-64 w-64 "></iframe>

                        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"><p className="text-xl text-teal-900 font-bold">Models</p></FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="vgg"
            name="radio-buttons-group">
            <FormControlLabel value="vgg" control={<Radio />} label="VGG" />
            <FormControlLabel value="mobilnet" control={<Radio />} label="MobileNet" />
            <FormControlLabel value="resnet" control={<Radio />} label="ResNet" />
            <FormControlLabel value="cnn" control={<Radio />} label="CNN" />

        </RadioGroup>
        </FormControl>
            </div>

            
       </div>
    <Footer/>
    </div>
  );
}

export default Home;
