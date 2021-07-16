import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2019, text: 'Cleared JEE-Advanced'},
  { number: 2016, text: 'Selected for student exchange program and went to japan' },
  { number: 1800, text: 'Codechef Rating' },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>
     Personal Accomplishment
   </SectionTitle>
   <Boxes>
     { data.map((card,index)=>(
         <Box key={index}>
           
          
           {/* <BoxNum>{card.number}+</BoxNum>; */}
          
           <BoxNum>{card.number}</BoxNum>
         
             
           <BoxText>{card.text}</BoxText>
           </Box>

       ))}
     </Boxes>
 </Section>
);

export default Acomplishments;
