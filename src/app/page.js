import Navbar from '@/components/modules/Navbar/Navbar'
import Title from '@/components/modules/Title/Title'
import Hero from '@/components/template/index/Hero/Hero'
import React from 'react'

function home() {
  return (
    <>
      <Navbar/>
      <Hero/>  
      <Title/>
      <br /><br /><br />   
    </>
  )
}

export default home