import React from 'react'
import Layout from '@common/Layout'

interface PagerProps {
  children: React.ReactNode
}

const Pager: React.FC<PagerProps> = () => {

  return (
    <Layout title="企业管理" user={{ name: 'bac', role: '管理员' }}>
      <div></div>
    </Layout>
  )
}

export default Pager
