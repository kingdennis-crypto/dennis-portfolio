import { Container, Grid } from '@mui/material';
import React from 'react';
import FadeInSection from './fadeInSection';
import SectionTitle from './sectionTitle';

const About = () => {
  return (
    <section id='about'>
      <FadeInSection>
        <Container className='section'>
          <SectionTitle title='Over mij' />
          <div className='maxWidth'>
            <p>Hallo! Mijn naam is Dennis en ik vind het leuk om dingen te creëren. Mijn interesse in programmeren begon in 2018 toen een klasgenoot me uitdaagde om een mobiele app te maken. Het bleek dat ik door die uitdaging mijn passie in programmeren had gevonden.</p>
            <p>Snel vooruit naar vandaag, en ik heb al een diploma in mijn zak van <a target='_blank' href="https://www.regiocollege.nl/mbo-opleiding/softwaredeveloper">Regio College</a>. Na mijn afstuderen, wilde ik hoger onderwijs zoeken aan de <a target='_blank' href="https://www.hva.nl/opleiding/hbo-ict/hbo-ict.html">Hogeschool van Amsterdam</a>. Waar ik momenteel een tweedejaars student ben die Software Engineering studeert.</p>
            <Grid container rowSpacing={2} columnSpacing={4}>
              <Grid item>
                <ul>
                  <li className="experienceItem">Javascript ES6+</li>
                  <li className="experienceItem">React.js</li>
                  <li className="experienceItem">React Native</li>
                  <li className="experienceItem">Node.js</li>
                </ul>
              </Grid>
              <Grid item>
                <ul>
                  <li className="experienceItem">Python</li>
                  <li className="experienceItem">Java</li>
                  <li className="experienceItem">HTML & CSS</li>
                  <li className="experienceItem">Flutter</li>
                </ul>
              </Grid>
            </Grid>
            <p>Buiten mijn werk volg ik graag de ontwikkelingen in de wetenschap. Ik speel ook veel videospelletjes, en lees de krant.</p>
          </div>
        </Container>
      </FadeInSection>
    </section>
  )
}

export default About;