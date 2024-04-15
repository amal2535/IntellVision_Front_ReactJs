import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import amal1 from '../images/amal1.jpg'
import farah from '../images/farah.jpg'
import fatma from '../images/fatma.jpg'

import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { RiCodeView } from "react-icons/ri";
import { GrCloudComputer } from "react-icons/gr";
import { GiCyberEye } from "react-icons/gi";

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a href={href} className="w-[30rem] p-4 rounded-md shadow-lg shadow-teal-800 relative overflow-hidden group bg-gradient-to-r from-teal-400 to-cyan-950 "
    >
      <div className="absolute inset-0 bg-cyan-950 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-teal-900 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-2xl text-teal-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-300 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};


export default function About() {


  return (
    <div>
        <div className="h-[180rem] ">

          <div className="w-full h-[45rem] bg-[url('./images/img.jpg')] bg-cover bg-center shadow-lg shadow-cyan-950 ">
              <Navbar/>
              <div className='justify-center items-center'>
                  <p className="bg-teal-600 text-transparent bg-clip-text font-bold text-9xl mt-32">
                      About 
                  </p>
                  <p className="bg-teal-600 text-transparent bg-clip-text font-bold text-6xl">
                    Us
                  </p>
                  <p className='text-gray-600 text-2xl  font-medium text-center mt-24'>
                  Welcome to our innovative image classification platform! 
                 
                  </p>
              </div> 
          </div>

      <div>
        <h1 className='text-6xl font-bold text-teal-900  mt-32' >
          Who Are We ?
        </h1>
      </div>


        <div className=" bg-cyan-950 hover:-translate-y-5 hover:translate-x-5 transition-transform duration-300 ml-[40rem] mt-24 flex rounded-lg shadow-xl shadow-teal-950 h-[20rem] w-[40rem] flex-row hover:bg-gradient-to-r from-teal-500 to-teal-800">
        <img
          className="h-96  rounded-t-lg object-cover md:h-auto w-64 rounded-none rounded-l-lg"
          src={amal1}
          alt="amal" />
        <div className="flex flex-col justify-center p-6 items-center">
          <h5
            className="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-50">
            Amal Maatoug
          </h5>
          <p className="mb-4 mt-9 text-lg text-neutral-200">
          Hello, I'm a student in the fourth year of the computer engineering program at the Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)          </p>
          <p className="text-md mt-9 text-neutral-300">
            Future Software Engineer
          </p>
        </div>
      </div>

      <div className="bg-cyan-950 ml-[50rem] hover:-translate-y-5 hover:-translate-x-5 transition-transform duration-300 my-9 flex  flex-row rounded-lg  shadow-xl shadow-teal-950  h-[20rem] w-[40rem] hover:bg-gradient-to-r from-teal-500 to-teal-800">
        <img
          className="h-96  rounded-t-lg object-cover md:h-auto w-64 rounded-none rounded-l-lg"
          src={farah}
          alt="farah" />
        <div className="flex flex-col justify-center p-6 items-center">
          <h5
            className="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-50">
            Farah Riahi
          </h5>
          <p className="mb-4 mt-9 text-lg text-neutral-200">
          Hello, I'm a student in the fourth year of the computer engineering program at the Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)  
          </p>
          <p className="text-md mt-9 text-neutral-300">
            Future Software Engineer
          </p>
        </div>
      </div>


      <div className="bg-cyan-950 my-9 ml-[30rem] hover:-translate-y-5 hover:-translate-x-5 transition-transform duration-300  flex rounded-lg shadow-xl shadow-teal-950 h-[20rem] w-[40rem] flex-row hover:bg-gradient-to-r from-teal-500 to-teal-800">
        <img
          className="h-96  rounded-t-lg object-cover md:h-auto w-64 rounded-none rounded-l-lg"
          src={fatma}
          alt="fatma" />
        <div className="flex flex-col justify-center p-6 items-center">
          <h5
            className="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-50">
            Fatma Gharouel
          </h5>
          <p className="mb-4 mt-9 text-lg text-neutral-200">
          Hello, I'm a student in the fourth year of the computer engineering program at the Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)        
          </p>
          <p className="text-md mt-9 text-neutral-300">
            Future Software Engineer
          </p>
        </div>
      </div>
       
      
      <div className="p-4 mt-48">
      <div>
        <h1 className='text-6xl font-bold text-teal-900 ' >
          Our services
        </h1>
      </div>  

      <div className="grid gap-8 grid-cols-2 mt-24 mx-80 w-[80rem]">
        <Card 
          title="Development"
          subtitle="Web & Mobile"
          href="#"
          Icon={RiCodeView}
        />
        <Card title="Machine Learning" subtitle="Image Classification" href="#" Icon={ GrCloudComputer } />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card
          title="Computer Vision"
          subtitle="Algorithms"
          href="#"
          Icon={GiCyberEye}
        />
      </div>
    </div>

        </div>
      <Footer/>
    </div>
  );
}
