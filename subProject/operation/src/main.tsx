import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Suspense fallback={() => <span>loading</span>}>
        <Router>
          <Switch>
            {
              routes.map(r => {
                const PageComponent = r.component
                return (
                  <Route key={r.path} path={r.path}>
                    <PageComponent />
                  </Route>
                )
              })
            }
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

export default App
