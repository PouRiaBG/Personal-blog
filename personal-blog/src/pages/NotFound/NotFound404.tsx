import React from 'react';
import { MainSection } from '../../styles/elements'
import {Section} from './style'
import Typed from 'react-typed'

const NotFound = ()=>{
    return (
        <MainSection>
            <Section>
               <p>
                  Oops !
               </p>
               <span>
                   <Typed
                    strings={[" Error 404! Page not found"]}
                    typeSpeed={40}
                     />
               </span>
            </Section>
        </MainSection>
    )
}

export default NotFound