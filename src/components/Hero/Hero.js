import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,Welcome To <br/>My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am aspiring developer and love to solve algorithimic problems in easy way using data structures and algorithims.
      </SectionText>
      <Button onClick={()=>window.location = "https://www.linkedin.com/in/dilendra-uikey-579635190/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;