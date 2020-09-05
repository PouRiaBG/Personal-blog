import React from 'react'
import {Link} from 'react-router-dom'
import {Navigation ,H1} from '../styles/elements'

const Header:React.FC = ()=>{
    return (
     <Navigation>
         <section className="nav-section">
             <H1>
                 Personal blog
             </H1>
         </section>
         <section className="nav-section">

            <Link to="/blog">
                Blog
            </Link>
         </section>
     </Navigation>
    )
}
export default Header