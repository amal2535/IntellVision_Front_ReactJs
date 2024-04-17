import React from "react";
import {BrainCircuit, MenuIcon} from 'lucide-react'
import { useState } from "react";
import HamMenu from "./HamMenu";
import { useLocation } from "react-router-dom";

function Navbar() {
    const Location = useLocation()
    const { pathname } = Location
    const [HamOpen, setHamOpen] = useState(false)
    if(HamOpen){
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }
    return (
        <>
            {
                HamOpen ?
                <HamMenu setOpen={setHamOpen} />
                :
                <nav className="w-full flex items-center md:justify-around justify-between  h-16 md:px-8 px-0 py-12 ">
                    <div className="w-fit flex items-center flex-shrink-0 mr-6 gap-2">
                        <BrainCircuit className="md:h-8 md:w-9 h-7 w-7 text-white"/>
                        <span className="md:text-3xl text-2xl tracking-tight font-bold text-white">Intell<span className="text-teal-400">Vision</span></span>
                    </div>
                    <div className="md:flex hidden lg:gap-24 gap-12 h-full items-center text-white md:-translate-x-">
                        <a href="/" className={`text-xl  cursor-pointer font-bold  hover:text-teal-400 ${pathname === "/" && "text-teal-400"}`}>
                        Home
                        </a>
                        <a href="/about" className={`text-xl  cursor-pointer font-bold  hover:text-teal-400 ${pathname === "/about" && "text-teal-400"}`}>
                            About
                        </a>
                        <a href="/contact" className={`text-xl  cursor-pointer font-bold  hover:text-teal-400 ${pathname === "/contact" && "text-teal-400"}`}>
                            Contact
                        </a>
                    </div>
                    <a href="#" className="md:flex hidden text-lg px-6 py-3 font-semibold leading-none border rounded-md text-white hover:bg-teal-400 border-teal-400 shadow-lg shadow-teal-800 transition duration-100">Login</a>
                    <button className="text-white md:hidden flex" onClick={()=>setHamOpen(true)}> <MenuIcon className="h-8 w-8" /> </button>
                </nav>
            }
        </>
    
    );
  }
  
  export default Navbar;
