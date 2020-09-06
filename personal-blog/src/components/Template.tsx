import React from 'react';
import GlobalStyle from '../styles/global'
import Navigation from './Navigation'
import Footer from './Footer';

const Template = ({children}: any)=>{
    return(
        <>
            <GlobalStyle/>
            <Navigation/>
                {children}
            <Footer/>
        </>
    )
}
export default Template