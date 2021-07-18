import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>
     Call
     </LinkTitle>
     <LinkItem >+91-7987381941<br/>+91-8458933780</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle>
     Email
     </LinkTitle>
     <LinkItem>dilendrauikey82178@gmail.com<br/>duikey@iitg.ac.in</LinkItem>
     {/* <LinkItem></LinkItem> */}
     </LinkColumn>

     </LinkList>
   </FooterWrapper>
  );
};

export default Footer;
