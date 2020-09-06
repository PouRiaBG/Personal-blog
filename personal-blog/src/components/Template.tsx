import React from 'react';
import GlobalStyle from '../styles/global'
import Navigation from './Navigation'

const Template = (props : any)=>{
    return(
        <>
            <GlobalStyle/>
            <Navigation/>
                {props.children}
        </>
    )
}
export default Template