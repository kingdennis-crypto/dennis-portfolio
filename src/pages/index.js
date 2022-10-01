import * as React from "react"
import "../App.css";

// Components
import Image from "../components/image";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer";

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderOpen from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';

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

const experienceData = [
  {
    company: "EWD215",
    title: "Junior Software Developer",
    start: "aug 2020",
    end: "mrt 2021",
    activities: [
      "Ontwerpen en bouwen van een applicatie waarmee de gebruiker toegang kan krijgen tot een virtuele desktop.",
      "Samenwerken met ervaren programmeurs om de technologieën te bedenken, te ontwerpen en op de markt te brengen.",
      "Index en query-systemen bouwen die schaalbaar zijn, fouttolerant, en gemakkelijk te beheren/gebruiken zijn."
    ]
  },
  {
    company: "Next Gen Atlas",
    title: "Co-founder",
    start: "apr 2021",
    end: "jul 2022",
    activities: [
      "Ontwerpen en bouwen van responsive React Native applicaties die gebruikt konden worden door klanten.",
      "React Native applicaties maken volgens best practives voor de volledige software development life cycle, inclusief coderingsstandaarden, code reviews, source control management en build processen.",
      "Werken met verschillende talen, platforms, frameworks en content management systemen zoals JavaScript, React, React Native, WordPress en Firebase."
    ]
  },
  {
    company: "Hogeschool van Amsterdam",
    title: "Student mentor",
    start: "aug 2022",
    end: "feb 2023",
    activities: [
      "Begeleiden van studenten in hun eerste semester.",
      "Bijles geven aan studenten die hulp nodig hebben met Java programmeren."
    ]
  }
]

const projectData = [
  {
    title: "Eager Willow",
    type: "mobile",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam magna eu quam vehicula molestie. Maecenas tristique leo risus, pulvinar efficitur justo mollis ut.",
    tags: "Flutter, NodeJS",
    github: "https://google.com"
  },
  {
    title: "The Green Birth",
    type: "mobile",
    description: "Lorem ipsum ",
    tags: "Flutter, NodeJS",
    github: "https://google.com"
  },
  {
    title: "Flames of Voyages",
    type: "web",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam magna eu quam vehicula molestie.",
    tags: "Flutter, NodeJS",
    github: "https://google.com"
  },
  {
    title: "The Roses's Shores",
    type: "backend",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam magna eu quam vehicula molestie.",
    tags: "Flutter, NodeJS",
  }
]

const scrollIntoView = () => {
  document.querySelector("#content")?.scrollIntoView(true)
}

const IndexPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 transition-colors overflow-x-hidden duration-700">
      <Navbar />
      <div className="h-screen relative flex flex-col justify-center items-center">
        <div className="gradient-text text-left text-8xl">
          <p>Eat.</p>
          <p>Sleep.</p>
          <p>Code.</p>
          <p>Repeat.</p>
        </div>
        <div onClick={scrollIntoView} className="absolute bottom-20 p-2 rounded-md bg-slate-400 text-gray-100 dark:bg-white/50 dark:text-slate-800 cursor-pointer transition-colors duration-700">
          <ExpandMoreIcon className="text-6xl" />
        </div>
      </div>
      <div id="content" className="container flex justify-center mx-auto py-20 px-10 sm:px-20">
        <div className="w-full sm:w-2/3">
          <section id="about">
            <p className="text-6xl dark:text-white duration-700">Hi, <span className="gradient-text">Dennis</span> here</p>
            <p className="text-2xl text-slate-400">I create stuff sometimes.</p>
            <div className="w-full sm:w-1/2">
              <p className="w-2/3 text-black dark:text-white duration-700">I am a full-stack developer based in Amsterdam with a passion for building digital services/stuff. I have a skillset ranging from launching products, planning and or designing the products to solve real-life problems with code.</p>
            </div>
            
          </section>
          <section id="experience" className="transition-colors duration-700">
            <p className="text-4xl mb-5 dark:text-white transition-colors duration-700">Experience</p>
            <ol class="relative border-l border-gray-200 dark:border-gray-700 max-w-4xl">
              {experienceData.map((item, index) => (
                <li key={index} class="ml-4 mb-5">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.start} - {item.end}</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title} | <span className="text-blue-700 dark:text-blue-500">{item.company}</span>
                  </h3>
                  <ul>
                    {item.activities.map((item) => (
                      <li className="activitiesList text-slate-800 dark:text-slate-200">{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
          <section id="projects">
            <p className="text-4xl mb-5 dark:text-white transition-colors duration-700">Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projectData.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-full p-5 flex flex-col overflow-hidden rounded-lg shadow-md bg-white  dark:bg-slate-700 dark:shadow-none dark:hover:shadow-none hover:shadow-xl hover:-translate-y-2 transition-all duration-200 ease-in-out"
                >
                  <div className="flex flex-row justify-between mb-2">
                    <FolderOpen fontSize="large" className="dark:text-slate-200 text-slate-700 transistion-colors duration-700" />
                    {item.github && (
                      <a href={item.github} target="_blank">
                        <GitHubIcon fontSize="large" className="dark:text-slate-200 text-slate-700 transistion-colors duration-700" />
                      </a>
                    )}
                  </div>
                  <p className="text-xl font-bold dark:text-white transition-colors duration-700">{item.title}</p>
                  <p className="mt-3 mb-5 dark:text-white transition-colors duration-700">{item.description}</p>
                  <p className="mt-auto text-sm text-slate-500 dark:text-slate-300 transition-colors duration-700">{item.tags}</p>
                </div>
              ))}
            </div>
          </section>
          {/* <Image
              src="selfPortrait.jpeg"
              className="w-20 h-20 rounded-md"
              alt="Sunset Image"
            /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Dennis Moes</title>

