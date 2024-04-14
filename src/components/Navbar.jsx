import React from "react";
import {BrainCircuit} from 'lucide-react'


function Navbar() {

    
    return (
        <nav class="w-full flex items-center justify-between  h-16 px-8 py-12 ">
        <div class="w-fit flex items-center flex-shrink-0 mr-6 gap-2">
            <BrainCircuit className="h-8 w-9 text-white"/>

            <span class="text-3xl tracking-tight font-bold text-white">Intell<span className="text-teal-400">Vision</span></span>
        </div>
    

        <div class="flex gap-24 h-full items-center text-white -translate-x-24">
            <a href="/" class=" text-xl  cursor-pointer font-bold  hover:text-teal-400 ">
            Home
            </a>
            <a href="/about" class="text-xl  cursor-pointer font-bold hover:text-teal-400">
                About
            </a>
            <a href="/contact" class="text-xl  cursor-pointer font-bold hover:text-teal-400">
                Contact
            </a>

        </div>

        
        <a href="#" class="text-lg px-6 py-3 font-semibold leading-none border rounded-md text-white hover:bg-teal-400 border-teal-400 shadow-lg shadow-teal-800 transition duration-100">Login</a>

    </nav>
    
    );
  }
  
  export default Navbar;
