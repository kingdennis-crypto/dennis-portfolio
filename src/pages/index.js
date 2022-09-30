import * as React from "react"
import "../App.css";

// Components
import Image from "../components/image";
import Navbar from "../components/navbar.js";

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StorageIcon from '@mui/icons-material/Storage';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';


// INSPIRATION
// https://www.craftz.dog/

const timelineData = [
  {
    date: "March 2020",
    title: "Microsoft Technology Associate: Introduction to Programming using HTML and CSS",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    date: "July 2020",
    title: "CCNA Routing and Switching: Routing and Switching Essentials",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    date: "May 2021",
    title: "Microsoft Technology Associate: Introduction to programming using Python",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
  }
]

const projectData = [
  {
    title: "Eager Willow",
    type: "mobile"
  },
  {
    title: "The Green Birth",
    type: "mobile"
  },
  {
    title: "Flames of Voyages",
    type: "web"
  },
  {
    title: "The Roses's Shores",
    type: "backend"
  }
]

const scrollIntoView = () => {
  document.querySelector("#content")?.scrollIntoView(true)
}

const getProjectIcon = (item) => {}

// TODO FIX TAILWIND OR CHANGE BACK TO JAVASCRIPT

const IndexPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 transition-colors overflow-x-hidden">
      <Navbar />
      <div className="h-screen relative flex flex-col justify-center items-center">
        <div className="gradient-text text-left text-8xl">
          <p>Eat.</p>
          <p>Sleep.</p>
          <p>Code.</p>
          <p>Repeat.</p>
        </div>
        <div onClick={scrollIntoView} className="absolute bottom-20 p-2 rounded-md bg-slate-400 text-gray-100 dark:bg-white/50 dark:text-slate-800 cursor-pointer">
          <ExpandMoreIcon className="text-6xl" />
        </div>
      </div>
      <div id="content" className="container flex justify-center mx-auto py-20 px-10 sm:px-20">
        <div className="w-full sm:w-2/3">
          <section>
            <p className="text-6xl dark:text-white">Hi, <span className="gradient-text">Dennis</span> here</p>
            <p className="text-2xl text-slate-400">I create stuff sometimes.</p>
            <div className="w-full sm:w-1/2">
              <p className="w-2/3 text-black dark:text-white">I am a full-stack developer based in Amsterdam with a passion for building digital services/stuff. I have a skillset ranging from launching products, planning and or designing the products to solve real-life problems with code.</p>
            </div>
          </section>
          <hr className="my-6" />
          {/* <Image
              src="selfPortrait.jpeg"
              className="w-20 h-20 rounded-md"
              alt="Sunset Image"
            /> */}

          {/* <div className="snap-x">
            {projectData.map((item, index) => (
              <div id={index} className="snap-center flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>

            ))}

          </div> */}

          <div className="flex overflow-x-scroll pb-10 pt-2 snap-x hide-scroll-bar">
            <div className="flex flex-nowrap">
              {projectData.map((item, index) => (
                <div key={index} className="inline-block px-3 snap-center">
                  <div
                    className="w-64 h-64 max-w-xs p-3 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  >
                    <p>{item.title}</p>

                  </div>
                </div>
              ))}
              {/* <div className="inline-block px-3 snap-center">
                <div
                  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ></div>
              </div>
              <div className="inline-block px-3 snap-center">
                <div
                  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ></div>
              </div>
              <div className="inline-block px-3 snap-center">
                <div
                  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ></div>
              </div>
              <div className="inline-block px-3 snap-center">
                <div
                  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ></div>
              </div>
              <div className="inline-block px-3 snap-center">
                <div
                  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ></div>
              </div>
              <div className="inline-block px-3 snap-center">
                <div
                  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ></div>
              </div>
              <div className="inline-block px-3 snap-center">
                <div
                  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Dennis Moes: any</title>

