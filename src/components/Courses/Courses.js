import React from 'react';
import { DiFirebase, DiReact, DiZend,DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './CoursesStyles';

const Courses = () =>  (
  <Section id="course">
     <SectionDivider/>
        <br/>
        <SectionTitle>Courses</SectionTitle>
        <List>
           <ListItem>Data Structures And Algorithim </ListItem>
           <ListItem>Database Management System </ListItem>
           <ListItem>Computer Architecture and Organisation </ListItem>
           <ListItem> Discrete Mathematics</ListItem>
           <ListItem> System Software Lab </ListItem>
           <ListItem> Formal Languages and Automata Theory </ListItem>
           <ListItem> Digital Design </ListItem>
           <ListItem> Number Theory and Algebra</ListItem>
           <ListItem> Probability and Random Process </ListItem>
           
           
         
           
        </List>
  </Section>
);

export default Courses
