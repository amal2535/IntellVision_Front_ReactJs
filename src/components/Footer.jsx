import React from "react";
import {Divider} from "@mui/material"
import { BrainCircuit } from "lucide-react";


function Footer() {
   
    return(
   

        <footer className=" bottom-0 bg-[url('./images/img.jpg')] bg-cover bg-center">
                      
        <div className="flex md:flex-row flex-col">
                <div className="flex gap-2 py-9 px-9">
                <BrainCircuit className="h-10 w-12 text-white"/>
                <p className=" text-2xl font-extrabold text-white"> INTELL<span className="text-teal-400">VISION.</span></p>
                </div>

            <div className="flex items-center md:gap-48 gap-8 mt-6 text-gray-200  md:ml-64 md:flex-row flex-col">
            <div className="flex flex-col justify-start text-start">
                <p className="font-bold  text-xl mb-6  text-teal-400">Services</p>
                <ul className="text-lg font-normal ">
                    <li>
                        <a href="#" className="hover:text-teal-400  ">Development</a>
                    </li>
                  
                    <li>
                        <a href="#" className="hover:text-teal-400  text-blac">Machine Learning</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-400  text-blac">Computer Vision</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col justify-start text-start">
                <p className="font-bold  text-xl mb-6 text-teal-400">Support</p>
                    <ul className="text-lg font-normal">
                        <li>
                            <a href="#" className="hover:text-teal-400 ">Documentation</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400 ">Guides</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400 ">API</a>
                        </li>
                    </ul>
            </div>

            <div className=" flex flex-col md:justify-start justify-center text-start ">
                <p className="font-bold text-xl mb-6 text-teal-400 ">Contact</p>
                <ul className="text-lg font-normal">
                    <li >
                        <a href="#" className="hover:text-teal-400   flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        intellVision@gmail.com</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-400   flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        +216 54 963 852</a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-teal-400   flex  gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Stah Jaber, Monastir 4000, Tunisia</a>
                    </li>
                </ul>
            </div>
            </div>
            </div>

            <div className="flex flex-row justify-between text-white items-center px-9 py-4">

                <span className="text-lg font-normal  text-gray-400">© 2024 <a href="https://flowbite.com/" className="text-white font-semibold hover:underline ">IntellVision </a> All Rights Reserved.
                </span>
            
                <ul className="flex text-lg font-semibold gap-2">
                    <li>
                        <a href="/" className="hover:text-teal-400 me-4  ">Home</a>
                    </li>
                    <Divider color="#bdbdbd" orientation="vertical" flexItem  />

                    <li>
                        <a href="/about" className="hover:text-teal-400  me-4  ">About</a>
                    </li>
                    <Divider color="#bdbdbd" orientation="vertical" flexItem />
                
                    <li>
                        <a href="/contact" className="hover:text-teal-400   " >Contact</a>
                    </li>  
                </ul>
            </div>

            <div className="justify-center items-center flex gap-4 -translate-y-4 ">
            <a href="https://www.facebook.com" >
            <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/?hl=ar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://github.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>

            </a>
            <a href="https://www.linkedin.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>

            </a>
            </div>
           
          
        </footer>



);
}
export default Footer;