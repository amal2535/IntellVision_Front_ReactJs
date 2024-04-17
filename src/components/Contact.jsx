import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { MdOutlinePlace,MdOutlineMarkEmailUnread ,MdOutlinePhoneInTalk} from "react-icons/md";



export default function Contact() {
  return (
    <div className="overflow-x-hidden">
    <div className="flex flex-col h-fit">

      <div className="h-screen bg-[url('./images/contactus.jpg')] bg-cover bg-center shadow-md px-8 shadow-cyan-950 ">
          <Navbar/> 
      </div>
      <p className="mt-24 px-4 mx-auto font-semibold text-center text-gray-600 text-2xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our algorithms? Let us know.</p>
      <iframe src="https://lottie.host/embed/68e3595a-0d27-408a-bf16-5b9e0437cd2c/xhzLplSv34.json" className='self-center mt-9 w-64 h-64'></iframe>

      <section className=" grid md:grid-cols-2 gap-64 border border-y-2 self-center justify-center" >
        <div className="py-8 w-full px-12 flex flex-col ">
            <form action="#" className="md:space-y-8 md:w-[35rem] w-full px-4 ">
                <div>
                    <label for="email" className="block mb-2 text-start text-md font-medium text-gray-400 ">Your email</label>
                    <input type="email" id="email" className="shadow-md  text-md rounded-lg  block w-full p-2.5 bg-cyan-950 placeholder-gray-400 text-white" placeholder="name@flowbite.com" required />
               
                    <label for="subject" className="block mb-2 text-start text-md font-medium text-gray-400 mt-9">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-md rounded-lg border shadow-sm  bg-cyan-950 border-gray-600 placeholder-gray-400 text-white" placeholder="Let us know how we can help you" required />
                </div>
          
                <div className="col-span-2">
                    <label for="message" className="block mb-2 text-md  text-start font-medium text-gray-400">Your message</label>
                    <textarea id="message" rows="8" className="block p-2.5 w-full text-md  rounded-lg shadow-sm  bg-cyan-950 border-gray-600 placeholder-gray-400 text-white" placeholder="Leave a comment..."></textarea>
                </div>
                <p className='font-normal text-start text-md text-gray-600'>
                    By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect, use and disclose your personal information.
                </p>
                <button type="submit" className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-teal-600 w-fit hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-400  shadow-lg shadow-teal-500">Send message</button>

            </form>
        </div>

        <div className='mt-24 gap-12 md:flex hidden flex-col'>
            <div className='flex gap-4 text-center'>
                <div className='bg-slate-400 rounded-full h-24 w-24 hover:-translate-y-5  transition-transform duration-300  '>
                    <MdOutlinePlace  className='w-24 h-24 py-4 px-2 text-slate-600 '/>
                </div>
                <p className='text-xl font-medium text-teal-950 mt-9'>
                   Stah Jaber, Monastir 4000, Tunisia
                </p>
            </div>
     
            <div className='flex gap-4 text-center'>
                <div className='bg-slate-400 rounded-full h-24 w-24 hover:-translate-y-5  transition-transform duration-300  '>
                <MdOutlinePhoneInTalk  className='w-24 h-24 py-4 px-2 text-slate-600 '/>
                </div>
                <p className='text-xl font-medium text-teal-950 mt-9'>
                  +216 54 963 852
                </p>
            </div>

            <div className='flex gap-4 text-center'>
                <div className='bg-slate-400 rounded-full h-24 w-24 hover:-translate-y-5  transition-transform duration-300  '>
                  <MdOutlineMarkEmailUnread   className='w-24 h-24 py-4 px-2 text-slate-600 '/>
                </div>
                <p className='text-xl font-medium text-teal-950 mt-9'>
                    intellVision@gmail.com
                </p>

            </div>
        </div>



      </section>

      </div>
      <Footer/>
    </div> 
  );
}
