import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import SectionTitle from './sectionTitle';

import '../styles/experience.css';
import FadeInSection from './fadeInSection';

let isHorizontal = false;

if (typeof window !== 'undefined') {
  // detect window screen width function
  isHorizontal = window.innerWidth < 600;
}

const jobList = [
  {
    company: 'EWD215',
    title: 'Junior Software Developer',
    duration: 'aug 2020 - mrt 2021',
    description: [
      'Ontwerpen en bouwen van een applicatie waarmee de gebruiker toegang kan krijgen tot een virtuele desktop.',
      'Samenwerken met ervaren programmeurs om de technologieën te bedenken, te ontwerpen en op de markt te brengen.',
      'Index en query-systemen bouwen die schaalbaar zijn, fouttolerant, en gemakkelijk te beheren/gebruiken zijn.',
    ]
  },
  {
    company: 'Next Gen Atlas',
    title: 'Mede oprichter',
    duration: 'apr 2021 - jul 2022',
    description: [
      'Ontwerpen en bouwen van responsive React Native applicaties die gebruikt konden worden door klanten.',
      'React Native applicaties maken volgens best practives voor de volledige software development life cycle, inclusief coderingsstandaarden, code reviews, source control management en build processen.',
      'Werken met verschillende talen, platforms, frameworks en content management systemen zoals JavaScript, React, React Native, WordPress en Firebase.',
    ]
  },
  {
    company: 'Hogeschool van Amsterdam',
    title: 'Studentmentor',
    duration: 'aug 2022 - feb 2023',
    description: [
      'Begeleiden van studenten in hun eerste semester.',
      'Bijles geven aan studenten die hulp nodig hebben met Java programmeren.'
    ]
  }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id='experience'>
      <FadeInSection>
        <Container className='section'>
          <SectionTitle title='Werkervaring'/>
          <Box
            sx={{ flexGrow: 1, display: 'flex', height: 300, flexWrap: "wrap" }}
          >
            <Tabs
              orientation={"vertical"}
              variant={isHorizontal ? "fullWidth" : "scrollable"}
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
            >
              {jobList.map((item, index) => (
                <Tab label={item.company} {...a11yProps(index)} />
              ))}
            </Tabs>
            {jobList.map((item, index) => (
              <TabPanel value={value} index={index}>
                <div className='jobTitle'>{item.title} | <span className='standoutText'>{item.company}</span></div>
                <div className='jobDuration'>{item.duration}</div>
                <div className='jobDescription'>
                  <ul>
                    {item.description.map((item, index) => (
                      <li className='experienceItem' style={{ marginBottom: 20 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
            ))}
          </Box>
        </Container>
      </FadeInSection>
    </section>
  );
}

export default Experience;