import React from 'react';
import {Route,Switch} from 'react-router-dom'
import routes from './Routes/routes'
import Template from './components/Template';
import AuthProvider from './components/AuthProvider'

const App:React.FC = ()=>{
  return (
    <AuthProvider>
      <Template>
          <Switch>
            {
              routes.map((routes)=>{
                  return <Route exact={routes.exact} path={routes.path} component={routes.components} key={routes.path} />
              })
            }
          </Switch>
        </Template>
    </AuthProvider>
    
  )
}
export default App