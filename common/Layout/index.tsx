import React from 'react'
import './index.scss'

interface LayoutProps {
  title: string
  user: {
    name: string
    role: string
    [key: string]: any
  }
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = props => {
  const { title, user, children } = props

  return (
    <div className="layout_container">
      <div className="layout_sidebar"></div>
      <div className="layout_header">
        <div className="layout_title">{title}</div>
        <div className="layout_user">{user.name}</div>
      </div>
      {children}
    </div>
  )
}

export default Layout