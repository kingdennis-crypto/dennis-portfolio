import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

import { Card, CardContent, Grid } from '@mui/material';
import FadeInSection from './fadeInSection';

const ProjectCard = (props) => {
  const { name, desc, techStack, github, index } = props;

  return (
    <Grid item xs={12} md={6} lg={4} >
      <FadeInSection delay={index + 3 + '00ms'}>
        <Card sx={{ backgroundColor: '#143452', color: 'white' }} className='projectCard'>
          <CardContent sx={{ padding: '30px' }}>
            <Grid container justifyContent='space-between' alignItems='center'>
              <CodeIcon sx={{ fontSize: 38, color: '#E23E57' }} />
              {github && (
                <a target="_blank" rel='noopener noreferrer' href={github} className='githubLink'>
                  <GitHubIcon sx={{ fontSize: 38 }} />
                </a>
              )}
            </Grid>
            <div className='projectTitle'>{name}</div>
            <div className='projectDescription'>{desc}</div>
            <hr style={{ opacity: 0.2 }}/>
            <div className='projectDescription'>{techStack}</div>
          </CardContent>
        </Card>
      </FadeInSection>
    </Grid>
  )
}

export default ProjectCard;