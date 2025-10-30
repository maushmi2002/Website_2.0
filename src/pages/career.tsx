import HomePage from '@/components/Career/HomePage'
import WhatWeDoPage from '@/components/Career/WhatWeDoPage'
import Layout from '@/components/layout/Layout'
import React from 'react'

const career = () => {
  return (
    <div>
      <Layout>  
        <HomePage />
        <WhatWeDoPage/>
      </Layout>
      
    </div>
  )
}

export default career
