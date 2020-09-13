import React from 'react';
import {Route,Switch} from 'react-router-dom'
import routes from './Routes/routes'
import Template from './components/Template';

const App:React.FC = ()=>{
  return (
    <>
      <Template>
        <Switch>
          {
            routes.map((routes)=>{
                return <Route exact={routes.exact} path={routes.path} component={routes.components} key={routes.path} />
            })
          }
        </Switch>
      </Template>
    </>
  )
}
export default App