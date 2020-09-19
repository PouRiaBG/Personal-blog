import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navigation ,H1} from '../../styles/elements'
import {links} from '../../Routes/links'
import {useAuthContext} from '../../hooks/useAuthContext'

const Nav:React.FC = (props)=>{
    const Auth = useAuthContext()
    return (
     <Navigation>
         <section className="nav-section">
             <H1>
                 <NavLink exact={true} to={Auth ? "/blog" : "/login"} activeClassName="underline">
                    {Auth ? "Welcome" : "Login"}
                 </NavLink>
            
             </H1>
             <H1>
                Personal blog
             </H1>
         </section>
         <section className="nav-section2">
            {
                links.map((link)=>{
                return <NavLink exact={link.exact || false} activeClassName="underline"
                to={link.to} key={link.name}>{link.name}</NavLink>
                })
            }
         </section>
     </Navigation>
    )
}
export default Nav