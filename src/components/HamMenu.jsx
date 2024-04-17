import {BrainCircuit, X} from 'lucide-react'
import { useLocation } from 'react-router-dom'

export default function HamMenu({setOpen}) {
    const Location = useLocation()
    const { pathname } = Location
    return(
        <div className="w-screen h-screen flex flex-col bg-gradient-to-tr from-gray-200 to-white z-[100] overflow-hidden pt-8 pb-8">
            <div className="w-full flex justify-between items-center px-10">
                <div className="w-fit flex items-center flex-shrink-0 mr-6 gap-2">
                    <BrainCircuit className="md:h-8 md:w-9 h-7 w-7 text-black"/>
                    <span className="md:text-3xl text-2xl tracking-tight font-bold text-black">Intell<span className="text-teal-400">Vision</span></span>
                </div>
                <button className="text-black" onClick={()=>setOpen(false)}> <X className="h-8 w-8 hover:rotate-90 transition-transform duration-150 delay-75 active:scale-95" /> </button>
            </div>
            <div className="w-full h-[2px] bg-[#C9C9C9] mt-6"/>
            <div className="flex flex-col gap-4 items-start mt-8 px-4">
                <a href="/" onClick={()=>setOpen(false)} className={` ${pathname === "/" && "bg-teal-400/20 text-teal-400" } text-xl  cursor-pointer font-bold  hover:text-teal-400 py-2 transition duration-100 delay-75 ease-in hover:bg-teal-400/20 hover:border-teal-400 rounded-md border-2 w-full text-start px-2`}>
                    Home
                </a>
                <a href="/about" onClick={()=>setOpen(false)} className={` ${pathname === "/about" && "bg-teal-400/20 text-teal-400" } text-xl  cursor-pointer font-bold  hover:text-teal-400 py-2 transition duration-100 delay-75 ease-in hover:bg-teal-400/20 hover:border-teal-400 rounded-md border-2 w-full text-start px-2`}>
                    About
                </a>
                <a href="/contact" onClick={()=>setOpen(false)} className={` ${pathname === "/contact" && "bg-teal-400/20 text-teal-400" } text-xl  cursor-pointer font-bold  hover:text-teal-400 py-2 transition duration-100 delay-75 ease-in hover:bg-teal-400/20 hover:border-teal-400 rounded-md border-2 w-full text-start px-2`}>
                    Contact
                </a>
            </div>
            <a href="#" onClick={()=>setOpen(false)} className="text-lg px-6 py-3 font-semibold leading-none border rounded-md text-teal-400 hover:text-white mt-8 mx-8 hover:bg-teal-400 border-teal-400 shadow-lg shadow-teal-800 transition duration-100">Login</a>
        </div>
    )
}