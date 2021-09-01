import React from 'react'

interface RouteShape {
  path: string,
  component: React.LazyExoticComponent<React.ComponentType>,
  showHeader?: boolean
}

const routes: RouteShape[] = [
  {
    path: '/workweixin',
    component: React.lazy(() => import('../pages/workWeixin')),
    showHeader: true,
  },
]

export default routes
