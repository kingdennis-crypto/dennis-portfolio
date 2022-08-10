import * as React from "react"
import '../styles/root.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Intro from "../components/intro.js";
import About from "../components/about.js";
import Experience from "../components/experience.js";
import Projects from "../components/projects.js";
import SideBarNav from "../components/sidebarNav";

const IndexPage = () => {
  return (
    <main>
      <Intro />
      <About />
      <Experience />
      <Projects />

      {/* <SideBarNav /> */}
      <footer>
        <p>Build and designed by Dennis Moes.</p>
        <p>All rights reserved. &copy;</p>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

