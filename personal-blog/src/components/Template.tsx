import React from 'react';
import GlobalStyle from '../styles/global'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer';

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