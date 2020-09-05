import React from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header';
import {Route} from 'react-router-dom'
import routes from './routes'

const App:React.FC = ()=>{
  return (
    <>
      <GlobalStyle/>
      <Header/>
       {
         routes.map((routes)=>{
            return <Route exact={routes.exact} path={routes.path} component={routes.components} />
         })
       }
    </>
  )
}
export default App