import React from 'react'

interface LayoutProps {
  useName: string
}

const Layout: React.FC<LayoutProps> = props => {
  const { useName } = props

  return (
    <div>{useName}</div>
  )
}

export default Layout