import React from "react";
import Footer from "./Footer.jsx";
import { useState ,useContext} from "react";
import Navbar from "./Navbar.jsx";
import { homecontext } from "../HomeContext.jsx";
import cifar10 from "../images/cifar10.png"
import fashion from "../images/fashion.png"
import {ArrowRight,ArrowLeft} from 'lucide-react'
import {Card,CardBody,CardHeader,} from "@material-tailwind/react";
import Chart from "react-apexcharts";

function Home() {
    const {getStepStatus,steps}=useContext(homecontext);
    const {setStepToTrue}=useContext(homecontext)


    const scrollUnderButton = () => {
        const button = document.getElementById('scrollButton'); 
        const buttonPosition = button.getBoundingClientRect().bottom; 
        const scrollPosition = buttonPosition + 100;
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth' 
        });
      };

      const [selectedDataset, setSelectedDataset] = useState(null);
  
      const handleDatasetChange = (event) => {
          setSelectedDataset(event.target.value);
      };

      const [imgSrc, setImgSrc] = useState(null);

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        const reader = new FileReader();

        reader.onload = function(e) {
          const imgSrc = e.target.result;
          setImgSrc(imgSrc);
        };
    
        reader.readAsDataURL(file);
      };

       {/**  step 4  */}
       const chartConfig = {
        type: "bar",
        height: 300,
        width:500,
        series: [
          {
            name: "Accuracy",
            data: [80, 88, 90, 96, 55],
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#020617"],
          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 2,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
            categories: [
              "CNN",
              "RNN",
              "ResNet",
              "MobileNet",
              "FCN",
             
            ],
          },
          yaxis: {
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
          },
          grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          fill: {
            opacity: 0.8,
          },
          tooltip: {
            theme: "dark",
          },
        },
      };
      {/** End step 4 */}

        
        const modelNames =selectedDataset=== 'fashion' ? ['CNN', 'CRNN','MobileNet','ResNet','VGG16'] : ['CNN', 'MobileNet','VGG16'];

       {/** consommation des apis de prediction */}

        const [selectedFile, setSelectedFile] = useState(null);
        const [prediction, setPrediction] = useState(null);
        const [testAcc, setTestAcc] = useState(null); 
        
        const handlePredict = async () => {
          try {
            if (!selectedFile) {
              alert("Please select an image file");
              return;
            }
            const formData = new FormData();
            formData.append('image', selectedFile);
        
            const response = await fetch('http://127.0.0.1:5000/predictMobileNet', {
              method: 'POST',
              body: formData,
            });
        
            if (!response.ok) {
              throw new Error('Failed to predict');
            }
        
            const data = await response.json();
            setPrediction(data.predicted_label);
            setTestAcc(data.test_accuracy);
            
          } catch (error) {
            console.error('Error:', error);
          }
        };
        

  return (
    <div>
        <div className="h-[100rem] ">
            
            <div className="flex flex-col items-center w-full gap-4">
                 
                <div className="w-full h-[45rem] bg-[url('./images/img.jpg')] bg-cover bg-center shadow-lg shadow-cyan-950 ">
                       <Navbar/>
                        <div className="flex flex-col justify-center items-center">
                            <p className="justify-center items-center bg-gradient-to-r from-slate-400 via-teal-400 to-teal-700  text-transparent bg-clip-text font-bold text-5xl mt-32">
                                    Discover the Power of Computer Vision
                            </p>
                            <p className="font-semibold text-lg text-gray-400 flex flex-col my-16">
                             Dive into the world of image classification and explore the endless possibilities of AI technology.
                            <p>With just a few clicks, you can train and test your own models.</p> 
                            </p>
                            <button id="scrollButton" onClick={scrollUnderButton} className="rounded-md bg-teal-400 px-8 py-2 mt-12 text-white text-lg font-semibold flex  items-center hover:bg-teal-600 shadow-lg shadow-teal-600">Start Your Journey</button>
                        </div>
                </div>
                
                <div className="mt-16 w-[80rem] h-[50rem] ">
                    {getStepStatus(0) && 
                     <div>
    
                     <h1 class="mt-16 text-4xl font-bold bg-gradient-to-t from-teal-400 via-teal-700 to-teal-900  text-transparent bg-clip-text ">Which dataset do you want to use?</h1>
                     
                     <ul class="grid gap-12 grid-cols-2 mt-12">
                         <li>
                             <input type="radio" id="hosting-small" name="hosting" value="cifar10" checked={selectedDataset === 'cifar10'} onChange={handleDatasetChange}  class="hidden peer"  />
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
                             <input type="radio" id="hosting-big" name="hosting" value="fashion"  checked={selectedDataset === 'fashion'} onChange={handleDatasetChange} class="hidden peer"  />
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
                 </div>}

                 
                    {getStepStatus(1) &&  
                    <div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className="mt-32">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-[35rem] h-[25rem] border border-cyan-950 rounded-lg cursor-pointer bg-[#ececec]  hover:bg-[#ececec]/70">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <img className="h-40 w-40 mb-4 object-contain" src={imgSrc} alt="Preview Image" />
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
                    </div>}
                    { getStepStatus(2) && selectedDataset && 
                     <div>
                     <p className=" items-center justify-center  text-teal-400 font-extrabold text-3xl mt-9">
                                    Let't Choose The Model
                         </p>
                 
                         <p className=" items-center justify-center  text-gray-500 font-medium text-lg mt-4">
                                    You can choose one or more !
                         </p>
                 
                         <div className="flex gap-32">
                 
                             <iframe src="https://lottie.host/embed/62d2d225-562b-4e3d-9de6-061aa2cd07e1/u0LnMQo9nk.json" className="h-96 w-96 "></iframe>
                 
                 
                             <div className="flex flex-col gap-24  items-start justify-center w-full  text-lg ml-32">
                                 <div className='flex gap-16'>
                                
                                   {modelNames.map((modelName) => (
                                 
                                     <label
                                     className="text-black  font-medium hover:cursor-pointer" >
                                     <input
                                     className="  h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400  checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer"
                                     type="checkbox"
                                     value={modelName} />
                                      {modelName}
                                     </label>
                                   
                                   
                                 ))}
                                     
                             </div>           
                               
                         </div>
                         </div>
                   
                         <div className="flex gap-8 justify-between mt-[11rem] mx-2  ">
                             <button onClick={()=>setStepToTrue(1)} className=" hover:text-white rounded-md bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft/>&nbsp;Previous</button>
                             <button  onClick={() => { handlePredict(); setStepToTrue(3); }} className="rounded-md bg-teal-400 px-8 py-2 border-2 border-teal-400  text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight/></button>
                         </div>
                         </div>

                         }

                    {getStepStatus(3) && 
                     <div className='flex flex-col justify-center  items-center gap-9 '>
                     <div className='flex gap-4  items-center '>
                         <p className="flex gap-4 items-center justify-center text-teal-400 font-extrabold text-3xl mt-9">
                             Let's View the Results 
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m3 15 2 2 4-4"/></svg>
                         </p>
                 
                     </div>
                     <br></br>
             
                     <div className='flex justify-center items-center gap-8'>
                        {imgSrc && <img src={imgSrc} alt="Dropped Image" width={150} height={150} />}
                      
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
                                <td className="whitespace-nowrap px-6 py-4 ">
                                 {prediction !== null && (
                                       <p>
                                        {prediction}
                                       </p>
                                   
                                      
                                    )}
                                </td>
                               <td className="whitespace-nowrap px-6 py-4">88%</td>
                               <td className="whitespace-nowrap px-6 py-4 ">
                                    <p>
                                        {testAcc}
                                    </p>
                               </td>
                               <td className="whitespace-nowrap px-6 py-4">0.88</td>
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
                 }
                    {getStepStatus(4) && 
                    <div className='flex flex-col justify-center  items-center gap-9 '>
                    <div className='flex gap-4  items-center '>
                        <p className="flex gap-4 items-center justify-center text-teal-400 font-extrabold text-3xl mt-9">
                            Let's Compare the Models
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-compare"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
                        </p>
                
                    </div>
                    <br></br>
                
                    <Card>
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                      >
                      </CardHeader>
                      <CardBody className="px-2 pb-0">
                        <Chart {...chartConfig} />
                      </CardBody>
                    </Card>    
                
                    <div className="flex gap-8 justify-between  px-8 w-full">
                        <button onClick={()=>setStepToTrue(3)} className=" hover:text-white rounded-md bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft/>&nbsp;Previous</button>
                    </div>
                
                    </div>}

                </div>
            </div>
           

        </div> 
   
        <Footer/>
    </div>
 

  );
}

export default Home;
