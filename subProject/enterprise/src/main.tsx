import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'
import Pager from './common/components/Pager'

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Suspense fallback={() => <span>loading</span>}>
        <Router>
          <Switch>
            {
              routes.map(r => {
                const PageComponent = r.component
                if (!r.showHeader) {
                  return (
                    <Route key={r.path} path={r.path}>
                      <PageComponent />
                    </Route>
                  )
                }
                return (
                  <Route key={r.path} path={r.path}>
                    <Pager>
                      <PageComponent />
                    </Pager>
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
