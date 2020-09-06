import React from 'react';
import {Route} from 'react-router-dom'
import routes from './Routes/routes'
import Template from './components/Template';

const App:React.FC = ()=>{
  return (
    <>
      <Template>
        {
          routes.map((routes)=>{
              return <Route exact={routes.exact} path={routes.path} component={routes.components} />
          })
        }
      </Template>
    </>
  )
}
export default App