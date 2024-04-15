import React,{useContext} from 'react';
import { ImageIcon,ArrowRight ,ArrowLeft} from "lucide-react";
import { homecontext } from "../../HomeContext";
import { useState } from 'react';



export default function Step1() {
  const {setStepToTrue}=useContext(homecontext)
  
  function handleFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgSrc = e.target.result;
        // Afficher l'image dans un élément img
        document.getElementById('preview-image').src = imgSrc;
    };

    // Lire le contenu du fichier en tant que Data URL
    reader.readAsDataURL(file);
}

  return (
    <div>
        <div className='flex flex-col items-center gap-4'>
            <div className="mt-32">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-[35rem] h-[25rem] border border-cyan-950 rounded-lg cursor-pointer bg-[#ececec]  hover:bg-[#ececec]/70">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <img id="preview-image" class="h-40 w-40 mb-4 object-contain" src="" alt="Preview Image" />
                    <p class="mb-2 text-lg text-cyan-950"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-sm text-cyan-950">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
            </div>

          
        </div>
          <div className="flex gap-8 justify-between mt-[10rem]  mx-4">
          <button onClick={()=>setStepToTrue(0)} className="rounded-md bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:text-white hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft/>&nbsp;Previous</button>
          <button onClick={()=>setStepToTrue(2)} className=" rounded-md bg-teal-400 px-8 py-2 border-2 border-teal-400  text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight/></button>
      </div>
   </div>
  );
}
