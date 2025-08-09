import Navbar from '@/components/modules/Navbar/Navbar'
import Title from '@/components/modules/Title/Title'
import Hero from '@/components/template/index/Hero/Hero'
import Latest from '@/components/template/index/Latest/Latest'
import Roadmap from '@/components/template/index/Roadmap/Roadmap'
import React from 'react'

function home() {
  return (
    <>
      <Navbar/>
      <Hero/>  
      <Title/>
      <Latest/>
      <Roadmap/>  
      <br /><br /><br />   
    </>
  )
}

export default home