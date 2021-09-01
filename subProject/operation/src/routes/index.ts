import React from 'react'

interface RouteShape {
  name: string,
  path: string,
  component: React.LazyExoticComponent<React.ComponentType>,
}

const routes: RouteShape[] = []

export default  routes
