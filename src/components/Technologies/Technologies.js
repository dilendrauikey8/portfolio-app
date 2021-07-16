import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
        <SectionDivider/>
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I have worked in some web development project i tried to cover all the aspect like fron-end,design,web scraping,back-end and many more 
        </SectionText>
        <List>
          <ListItem>
            <DiReact size="5rem"/>
            <ListContainer>
              <ListTitle>
                 Front-End
              </ListTitle>
              <ListParagraph>
                Experience with <br/>React.js ,javaScript,html,css
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <DiFirebase size="5rem"/>
            <ListContainer>
              <ListTitle>
                 Back-End
              </ListTitle>
              <ListParagraph>
                Experience with <br/>Nodejs and databases.
              </ListParagraph>
            </ListContainer>
          </ListItem>
          {/* <ListItem>
            <DiFirebase size="2 rem"/>
            <ListContainer>
              <ListTitle>
                 Front-End
              </ListTitle>
              <ListParagraph>
                Experience with <br/>React.js ,javaScript,html,css
              </ListParagraph>
            </ListContainer>
          </ListItem> */}
        </List>
  </Section>
);

export default Technologies;
