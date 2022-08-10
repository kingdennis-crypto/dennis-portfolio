import React from 'react';
import '../styles/sidebar.css';

const SideBarNav = () => {
  return (
    <nav className='sidebar'>
      <a href="#intro">/ Intro</a>
      <a href="#about">/ Over mij</a>
      <a href="#experience">/ Werkervaring</a>
      <a href="#projects">/ Projecten</a>
    </nav>
  )
}

export default SideBarNav;