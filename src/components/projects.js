import { Container, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from './sectionTitle';
import '../styles/projects.css';
import ProjectCard from './projectCard';
import FadeInSection from './fadeInSection';

const projects = [
  {
    name: 'MusicBox',
    desc: 'Een ontwerp van een muziekspeler waar de gebruiker hits kan bekijken en de song(s) aan een playlist kan toevoegen.',
    techStack: 'Flutter, GetX',
    github: 'https://github.com/kingdennis-crypto/MusicBox'
  },
  {
    name: 'MyRecipeApp',
    desc: 'Een eenvoudige app waarbij via een api (geleverd door Edamam) de app data binnenhaalt en weergeeft.',
    techStack: 'React Native, axios',
    github: 'https://github.com/kingdennis-crypto/MyRecipeApp'
  },
  {
    name: 'Bird',
    desc: 'Een platform waar bedrijven bestellingen konden plaatsen die opgehaald zouden worden door bezorgers die de bestelling naar het adres word gebracht.',
    techStack: 'HTML & CSS, Javascript, MapBox, Encryption',
    github: ''
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <FadeInSection>
        <Container className='section'>
          <SectionTitle title='Projecten' />
          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {projects.map((item, index) => (
                <ProjectCard key={index} index={index} {...item} />
              ))}
            </Grid>
          </div>
        </Container>
      </FadeInSection>
    </section>
  )
}

export default Projects;