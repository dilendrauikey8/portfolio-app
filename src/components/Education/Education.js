import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TableContainer } from './EduactionStyles';

const Education = () =>  (
  <Section id='edu'>
     <SectionDivider/>
     <SectionTitle>Education</SectionTitle>
   
<TableContainer>
  <tr>
    <th>Degree/Program</th>
    <th>Institute/Board</th> 
    <th>CGPA/Percentage</th>
    <th>Year</th>
  </tr>
  <tr>
    <td>B.tech</td>
    <td>Indian Institute of Technology,Guwahati</td>
    <td>7.66(Current)</td>
    <td>2019-Present</td>
  </tr>
  <tr>
  <td>Senior Secondary</td>
    <td>CBSE</td>
    <td>86.8%</td>
    <td>2018</td>
  </tr>
  <tr>
  <td>Secondary</td>
    <td>CBSE</td>
    <td>10.00</td>
    <td>2016</td>
  </tr>
</TableContainer>
        
  </Section>
);

export default Education;
