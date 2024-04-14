import React from 'react';
import { homecontext } from "../../HomeContext";
import { useState,useContext } from "react";
import { ArrowRight ,ArrowLeft} from "lucide-react";
import {Card,CardBody,CardHeader,} from "@material-tailwind/react";
import Chart from "react-apexcharts";

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
 
export default function Step4() {

    const {setStepToTrue}=useContext(homecontext)

  return (
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

    </div>
  );
}
