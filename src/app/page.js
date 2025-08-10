import Navbar from '@/components/modules/Navbar/Navbar'
import Title from '@/components/modules/Title/Title'
import Blog from '@/components/template/index/Blog/Blog'
import HelpUs from '@/components/template/index/HelpUs/HelpUs'
import Hero from '@/components/template/index/Hero/Hero'
import Latest from '@/components/template/index/Latest/Latest'
import NewCourses from '@/components/template/index/NewCourses/NewCourses'
import PopularCourses from '@/components/template/index/PopularCourses/PopularCourses'
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
      <PopularCourses/>  
      <HelpUs/>
      <NewCourses/>
      <Blog/>
      <br /><br /><br />   
    </>
  )
}

export default home