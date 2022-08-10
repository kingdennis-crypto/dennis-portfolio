import { Container } from '@mui/system';
import React from 'react';
import '../styles/intro.css';
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return (
    <Container id='intro'>
      <div className='maxWidth'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hallo, ik ben <span class='standoutText'>Dennis</span>.").start()
          }}
        />
        <div id='introSubtitle'>Ik ontwikkel dingen voor het web en mobiel</div>
        <div id='introDescription'>Ik ben een software engineer gespecialiseerd in het bouwen (en soms ontwerpen) van uitzonderlijke digitale ervaringen. Momenteel ben ik nog student aan de Hogeschool van Amsterdam</div>
      </div>
    </Container>
  )
}

export default Intro;