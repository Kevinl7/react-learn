import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoutes } from './routes';

import LayoutMenu from './components/layout';
import { hasToken } from './utils/auth'

function App(props:any) {
  return (
    hasToken() ? 
    (
      <LayoutMenu>
      <Switch>
        {
          adminRoutes.map((route:any) => {
            return (
              <Route 
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={
                  routeProps => {
                    return <route.component {...routeProps} />
                  }
                }
              />
            )
          })
        }
        <Redirect to={adminRoutes[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </LayoutMenu>
    ) : (<Redirect to="/login" />)
  )
}

export default App;
