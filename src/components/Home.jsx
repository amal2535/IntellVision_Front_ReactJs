import React from "react";
import Footer from "./Footer.jsx";
import { useState ,useContext,useEffect} from "react";
import Navbar from "./Navbar.jsx";
import { homecontext } from "../HomeContext.jsx";
import cifar10 from "../images/cifar10.png"
import fashion from "../images/fashion.png"
import {ArrowRight,ArrowLeft,ImageIcon} from 'lucide-react'
import {Card,CardBody,CardHeader,} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import clsx from "clsx";




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
      const [selectedMsg, setSelectedMsg] = useState("")
      const [selectedPic, setSelectedPic] = useState("")
  
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


        
      const modelNames = selectedDataset === 'fashion' ? ['CNN_Fashion', 'CRNN', 'MobileNet_Fashion', 'ResNet', 'VGG16_Fashion'] : ['CNN', 'MobileNet', 'VGG16'];
   
      {/** consommation des apis de prediction */}
      
      const [selectedFile, setSelectedFile] = useState(null);
      const [prediction, setPrediction] = useState([]);    
      const [selectedModels, setSelectedModels] = useState([]);

        {/** cifar10 models */}
      const [cnnChecked, setCnnChecked] = useState(false)
      const [mobileNetChecked, setMobileNetChecked] = useState(false)
      const [VGGChecked, setVGGChecked] = useState(false)
      {/**fashion models */}
      const [crnnChecked, setCrnnChecked] = useState(false)
      const [cnnfashionChecked, setCnnFashionChecked] = useState(false)
      const [mobileNetfashionChecked, setMobileNetfashionChecked] = useState(false)
      const [resNetChecked, setResNetChecked] = useState(false)
      const [VGGfashionChecked, setVGGfashionChecked] = useState(false)

      const modelCheckedMap = {
        CNN_Fashion: cnnfashionChecked,
        CRNN: crnnChecked, 
        MobileNet_Fashion: mobileNetfashionChecked,
        ResNet: resNetChecked,
        VGG16_Fashion: VGGfashionChecked,
        CNN: cnnChecked,
        MobileNet: mobileNetChecked,
        VGG16: VGGChecked,
      };
  
      const handlePredict = async () => {
        try {
          const formData = new FormData();
          formData.append('image', selectedFile);
      
          const newPredictions = [];
      
          for (const modelName of modelNames) {
            const isChecked = modelCheckedMap[modelName];
      
            if (isChecked) {
              const apiUrl = `http://127.0.0.1:5000/predict${modelName}`;
              const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
              });
      
              if (!response.ok) {
                throw new Error(`${modelName} Failed to predict`);
              }
      
              const data = await response.json();
              newPredictions.push({
                modal: modelName,
                predicted_label: data.predicted_label,
                test_accuracy: data.test_accuracy,
                F1_Score: data.F1_Score,
              });
            }
          }
      
          setPrediction(prevPrediction => [...prevPrediction, ...newPredictions]);
          console.log("================================", prediction);
          setStepToTrue(3);
          console.log(formData)
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      const handleChecked = (modalName) => {
        switch (modalName) {
          case "CNN": 
            setCnnChecked(!cnnChecked)
            return
          case "MobileNet": 
            setMobileNetChecked(!mobileNetChecked) 
            return
          case "VGG16": 
            setVGGChecked(!VGGChecked)
            return
          case "CNN_Fashion":
            setCnnFashionChecked(!cnnfashionChecked); // Corrected variable name
            return;
          case "CRNN":
            setCrnnChecked(!crnnChecked);
            return;
          case "MobileNet_Fashion":
            setMobileNetfashionChecked(!mobileNetfashionChecked);
            return;
          case "ResNet":
            setResNetChecked(!resNetChecked);
            return;
          case "VGG16_Fashion":
            setVGGfashionChecked(!VGGfashionChecked); // Corrected variable name
            return;
          default: 
            return;
        }
      }
      {/*const handlePredict = async () => {
        try {
          if (!selectedFile) {
            alert("Please select an image file");
            return;
          }
      
          const formData = new FormData();
          formData.append('image', selectedFile);
      
          // Iterate over each selected model
          for (const modelName of selectedModels) {
            const apiUrl = `http://127.0.0.1:5000/predict${modelName}`;
      
            const response = await fetch(apiUrl, {
              method: 'POST',
              body: formData,
            });
      
            if (!response.ok) {
              throw new Error(`Failed to predict for model ${modelName}`);
            }
      
            const data = await response.json();
      
            // Update state objects using spread operator
            setPredictions(prevPredictions => ({
              ...prevPredictions,
              [modelName]: data.predicted_label,
            }));
            setTestAcc(prevTestAcc => ({
              ...prevTestAcc,
              [modelName]: data.test_accuracy,
            }));
            setTestF1Score(prevTestF1Score => ({
              ...prevTestF1Score,
              [modelName]: data.F1_Score,
            }));
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      const handleCheckboxChange = (modelName) => {
        setSelectedModels((prevSelectedModels) => {
          if (prevSelectedModels.includes(modelName)) {
            return prevSelectedModels.filter((name) => name !== modelName);
          } else {
            return [...prevSelectedModels, modelName];
          }
        });
      };*/}
      
      {/**  step 4 : comparaison */}
    
      const handleChart = () => {
        const tempData = []
        const tempCategory = []
    
        prediction.map((item) => {
          tempData.push(item.test_accuracy)
          tempCategory.push(item.modal)
        })
    
        return {
          type: "bar",
          height: 300,
          width:500,
          series: [
            {
              name: "Accuracy",
              data: tempData,
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
              categories: tempCategory,
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
        }
        }
      {/** End step 4 */}
      
        

  return (
    <div className="overflow-x-hidden">
        <div className="h-fit">
            
            <div className="flex flex-col items-center w-full gap-4">
                 
            <div className="md:w-full  h-screen bg-[url('./images/img.jpg')] bg-cover bg-center shadow-lg shadow-cyan-950 px-8">
                       <Navbar/>
                        <div className="flex flex-col justify-center items-center mt-14">
                            <p className="justify-center items-center bg-gradient-to-r from-slate-400 via-teal-400 to-teal-700  text-transparent bg-clip-text font-bold text-5xl md:mt-32 mt-16">
                                    Discover the Power of Computer Vision
                            </p>
                            <p className="font-semibold text-lg text-gray-400 flex flex-col my-16">
                             Dive into the world of image classNameification and explore the endless possibilities of AI technology.
                            <p>With just a few clicks, you can train and test your own models.</p> 
                            </p>
                            <button id="scrollButton" onClick={scrollUnderButton} className="rounded-md bg-teal-400 px-8 py-2 md:mt-12 mt-8 text-white text-lg font-semibold flex  items-center hover:bg-teal-600 shadow-lg shadow-teal-600 transform ease-in duration-100">Start Your Journey</button>
                        </div>
                </div>
                
                <div className="mt-16 w-full h-full ">
                    {getStepStatus(0) && 
                     <div>
    
    <h1 className="mt-16 md:text-5xl text-4xl font-bold bg-gradient-to-tr from-teal-400 via-teal-600 to-teal-700  text-transparent bg-clip-text">Which dataset do you want to use?</h1>
                     
                     <ul className="flex flex-wrap md:gap-20 gap-12 mt-12 h-full justify-center items-center px-8">
                         <li className="w-fit flex flex-col">
                             <input type="radio" id="hosting-small" name="hosting" value="cifar10" checked={selectedDataset === 'cifar10'} onChange={handleDatasetChange}  className="hidden peer"  />
                             <label for="hosting-small" className="transform ease-in duration-100 inline-flex items-center p-5  shadow-lg shadow-gray-800  rounded-lg cursor-pointer peer-checked:border-2 peer-checked:scale-105 peer-checked:border-teal-400  hover:bg-gray-700 text-gray-400 bg-gray-800  ">                           
                                 <div className=" items-center justify-center">
                                     <div className="w-full text-2xl font-bold text-white">Cifar-10</div>
                                     <div className="text-center w-96 mt-4">
                                         The CIFAR-10 dataset consists of 60000 32x32 colour images in 10 classNamees, with 6000 images per className. There are 50000 training images and 10000 test images.
                                     </div>
                                     <br></br>
                                     <img alt='img' src={cifar10} width={300} className='mx-12' ></img>
                                 </div>
                                 
                             </label>
                             <a href='https://www.cs.toronto.edu/~kriz/cifar.html' className="transform ease-in duration-100 rounded-md hover:shadow-lg w-full hover:shadow-teal-700 bg-teal-400 px-8 py-2 mt-8 text-teal-950 text-lg font-semibold flex justify-center items-center gap-3 ">
                                 Read more
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                             
                             </a>
                         </li>
                         <li className="w-fit">
                             <input type="radio" id="hosting-big" name="hosting" value="fashion"  checked={selectedDataset === 'fashion'} onChange={handleDatasetChange} className="hidden peer"  />
                             <label for="hosting-big" className="transform ease-in duration-100 inline-flex items-center p-5 shadow-lg shadow-gray-800 rounded-lg cursor-pointer  peer-checked:border-2 peer-checked:scale-105 peer-checked:border-teal-400 hover:bg-gray-700 text-gray-400 bg-gray-800 ">                           
                                 <div className="block items-center justify-center">
                                     <div className="w-full text-2xl font-bold text-white">Fashion-Mnist</div>
                                     <div className="text-center w-96 mt-4">
                                     Fashion-MNIST dataset consists of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classNamees.
                                      </div>
                                     <br></br>
                                     <img alt='fashion' src={fashion} width={400} ></img>
                                 </div>
                                
                             </label>
                             <a href='https://www.kaggle.com/datasets/zalando-research/fashionmnist' className="transform ease-in duration-100 rounded-md hover:shadow-lg w-full hover:shadow-teal-700 bg-teal-400 px-8 py-2 mt-8 text-teal-950 text-lg font-semibold flex justify-center items-center gap-3 ">
                                 Read more
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                             
                             </a>
                         </li>
                     </ul>
                         <div className='w-full flex flex-col justify-center py-12 '>
                             <button onClick={()=>{if(selectedDataset){setStepToTrue(1); setSelectedMsg("Please select a dataset before procceeding...")}else{setSelectedMsg("Please select a dataset before procceeding...")}}} className="transform ease-in duration-100 rounded-md group  bg-teal-400 border-2 border-teal-400 px-8 mx-4 py-2 mt-8 self-center text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight className="group-hover:translate-x-1 transform ease-in duration-100 translate-y-[1px]"/></button>
                             <p className="text-sm font-semibold mt-2 text-red-500"> {selectedMsg} </p>
                         </div>
                 </div>}

                 
                    {getStepStatus(1) &&  
                   <div>
                   <div className='flex flex-col items-center gap-4'>
                       <div className="mt-16 px-8 w-full flex justify-center">
                       <label for="dropzone-file" className="flex flex-col items-center justify-center sm:w-[35rem] h-[25rem] w-full border border-cyan-950 rounded-lg cursor-pointer bg-[#ececec]  hover:bg-[#ececec]/70">
                           <div className="flex flex-col items-center justify-center pt-5 pb-6">
                               {
                                 imgSrc ?
                                 <img className="h-40 w-40 mb-4 object-contain" src={imgSrc} alt="Preview Image" />
                                 :
                                 <ImageIcon className="w-16 h-16" />
                               }
                               <p className="mb-2 text-lg text-cyan-950"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                               <p className="text-sm text-cyan-950">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                           </div>
                           <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                       </label>
                       </div>

                   
                   </div>
                   <div className="flex gap-8 justify-around pt-8 pb-4 mx-4">
                   <button onClick={()=>setStepToTrue(0)} className="transform ease-in duration-100 rounded-md group bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:text-white hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft className="group-hover:-translate-x-1 transform ease-in duration-100 translate-y-[1px]"/>&nbsp;Previous</button>
                   <button onClick={()=>{if(imgSrc){setStepToTrue(2); setSelectedPic("")}else{setSelectedPic("Please select an image to predict.")}}} className="transform ease-in duration-100 rounded-md group bg-teal-400 px-8 py-2 border-2 border-teal-400  text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight className="group-hover:translate-x-1 transform ease-in duration-100 translate-y-[1px]"/></button>
               </div>
               <p className="text-sm font-semibold mt-2 text-red-500 pb-4"> {selectedPic} </p>
           </div>}
                    { getStepStatus(2) && selectedDataset && 
                     <div>
                     <p className=" items-center justify-center  text-teal-400 font-extrabold text-3xl mt-14">
                                    Let't Choose The Model
                         </p>
                 
                         <p className=" items-center justify-center  text-gray-500 font-medium text-lg mt-4">
                                    You can choose one or more !
                         </p>
                 
                         <div className="flex w-full justify-center md:gap-24 gap-8 flex-wrap">
                 
                             <iframe src="https://lottie.host/embed/62d2d225-562b-4e3d-9de6-061aa2cd07e1/u0LnMQo9nk.json" className="h-96 w-96 "></iframe>
                 
                             <div className="flex flex-col gap-24  items-start justify-center  text-lg">
                                 <div className='flex gap-16'>
                                
                                   {modelNames.map((modelName) => (
                                 
                                     <label
                                     className="text-black  font-medium hover:cursor-pointer" >
                                    <input
                                        className={clsx("h-[2rem] w-[2rem] appearance-none rounded-md border-[0.1rem] border-gray-500 flex justify-center items-center outline-none before:pointer-events-none checked:border-teal-700 checked:bg-teal-400 checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[1.2rem] checked:after:w-[0.5rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white hover:cursor-pointer",
                                         
                                        (modelName === "CNN" && cnnChecked )
                                        || (modelName === "MobileNet" && mobileNetChecked)
                                        ||( modelName === "VGG16" && VGGChecked)
                                        ||( modelName === "CRNN" && crnnChecked)
                                        ||( modelName === "MobileNet_Fashion" && mobileNetfashionChecked)
                                        ||( modelName === "ResNet" && resNetChecked)
                                        ||( modelName === "CNN_Fashion" && cnnfashionChecked )
                                        ||( modelName === "VGG16_Fashion" && VGGfashionChecked)

                                      )}
                                        
                                        type="checkbox"
                                        value={modelName}
                                        onClick={() => handleChecked(modelName)}

                                      />
                                      {modelName}
                                     </label>

                                 ))}
                                     
                             </div>
                             </div>

                                  {/*   <button className={clsx("bg-teal-400 p-2 rounded-md text-white hover:bg-teal-500", {
                                      "bg-teal-500": 
                                        (modelName === "CNN" && cnnChecked )
                                        || (modelName === "MobileNet" && mobileNetChecked)
                                        ||( modelName === "VGG16" && VGGChecked)
                                        ||( modelName === "CRNN" && crnnChecked)
                                        ||( modelName === "MobileNet_Fashion" && mobileNetfashionChecked)
                                        ||( modelName === "ResNet" && resNetChecked)
                                        ||( modelName === "CNN_Fashion" && cnnfashionChecked )
                                        ||( modelName === "VGG16_Fashion" && VGGfashionChecked)

                                    })}
                                      value={modelName} 
                                      onClick={() => handleChecked(modelName)}
                                    > */}

                               </div>
                             
                        
                          <div className="flex gap-8 justify-around py-4  mx-2  ">
                             <button onClick={()=>setStepToTrue(1)} className=" hover:text-white transform ease-in duration-100 rounded-md group bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft className="group-hover:-translate-x-1 transform ease-in duration-100 translate-y-[1px]"/>&nbsp;Previous</button>
                             <button  onClick={() => { handlePredict(); }} className="transform ease-in duration-100 rounded-md group bg-teal-400 px-8 py-2 border-2 border-teal-400  text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight className="group-hover:translate-x-1 transform ease-in duration-100 translate-y-[1px]"/></button>
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
             
                     <div className='flex justify-center items-center gap-8 flex-wrap'>
                        {imgSrc && <img src={imgSrc} alt="Dropped Image" width={150} height={150} />}
                      
                      {/* <div className='flex flex-col'>
                        <div>
                        {selectedModels.map((modelName) => (
                          <div class="mb-1 text-start text-md font-normal">
                          {predictions[modelName] && (
                                          <p>{predictions[modelName]}</p>
                            )}
                          </div>
                          ))}
                        </div>*/} 

                     </div>
                     <div className="overflow-x-auto mx-4">
                        <div className="inline-block  py-2">
                        <div className="sm:max-w-full max-w-96 overflow-x-auto">
                            <table className="text-left text-md font-normal">
                              <thead className="text-gray-400 border-b-2">
                                <tr>
                                  <th scope="col" className="px-6 py-4">Model</th>
                                  <th scope="col" className="px-6 py-4">Predicted Class</th>
                                  <th scope="col" className="px-6 py-4">Accuracy</th>
                                  <th scope="col" className="px-6 py-4">Score F1</th>
                                </tr>
                              </thead>
                              <tbody className="font-normal text-black">
                                      {
                                    prediction.map((item) => (
                                      <tr className="border-b-2" key={item.modal}>
                                        <td className="whitespace-nowrap text-start px-6 py-4 font-semibold ">
                                          {item.modal}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 ">
                                          {item.predicted_label}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 ">
                                          {item.test_accuracy}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                          {item.F1_Score}
                                        </td>
                                      </tr>
                                    ))
                                  }
                                </tbody>


                            </table>
                          </div>
                        </div>
                      </div>

             
             
                      <div className="flex gap-8 justify-around py-4  px-8 w-full">
                         <button onClick={()=>setStepToTrue(2)} className=" hover:text-white transform ease-in duration-100 rounded-md group bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft className="group-hover:-translate-x-1 transform ease-in duration-100 translate-y-[1px]"/>&nbsp;Previous</button>
                         <button onClick={()=>setStepToTrue(4)} className="transform ease-in duration-100 rounded-md group bg-teal-400 px-8 py-2 border-2 border-teal-400  text-white text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950  " >Next&nbsp;<ArrowRight className="group-hover:translate-x-1 transform ease-in duration-100 translate-y-[1px]"/></button>
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
                    {selectedModels.length === 1 && (
                          <p className="text-red-500 font-semibold">Please select more than one model to compare.</p>
                        )}
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
                    <Chart {...handleChart()} />
                  </CardBody>
                </Card>
            

                    <div className="flex gap-8 justify-center py-4  px-8 w-full">
                        <button onClick={()=>setStepToTrue(3)} className=" hover:text-white transform ease-in duration-100 rounded-md group bg-none border-2 border-teal-400  px-4 py-2 text-teal-400  text-lg font-semibold flex justify-center items-center hover:bg-teal-500 hover:shadow-md hover:shadow-teal-950 " ><ArrowLeft className="group-hover:-translate-x-1 transform ease-in duration-100 translate-y-[1px]"/>&nbsp;Previous</button>
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
