import React from 'react';
import { MainSection } from '../../styles/elements'
import {Section } from './style'
import Typed from 'react-typed';
import {Link} from 'react-router-dom'

const Home = ()=>{
    return (
        <MainSection>
            <Section>
                <h1>
                    <Typed 
                    strings={['Hello!','Welcome to our Blog']}
                    typeSpeed={50}
                    backSpeed={40}
                    />
                 </h1>
                <h3>Read our blog! everything you need is here.</h3>
                <Link to="/blog">
                    Read our blog
                </Link>
            </Section>
        </MainSection>
    )
}

export default Home