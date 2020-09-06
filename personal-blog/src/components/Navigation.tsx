import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navigation ,H1} from '../styles/elements'
import {links} from '../Routes/links'

const Nav:React.FC = (props)=>{
    
    return (
     <Navigation>
         <section className="nav-section">
             <H1>
                 Personal blog
             </H1>
         </section>
         <section className="nav-section2">
            {
                links.map((link)=>{
                return <NavLink exact={link.exact || false} activeClassName="underline"
                to={link.to}>{link.name}</NavLink>
                })
            }
         </section>
     </Navigation>
    )
}
export default Nav