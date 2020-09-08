import React from 'react';
import {FooterBlog} from '../../styles/elements'
import {Section} from './style'
const Footer = ()=>{
    return ( 
       <FooterBlog>
           <Section>
               <h1 className="h1">Personal Blog</h1>
               <h6 className="h6">
               © 2020  Designed by PouRiaBG
               </h6>
           </Section>
           <Section>test</Section>
       </FooterBlog>
    )   
}
export default Footer