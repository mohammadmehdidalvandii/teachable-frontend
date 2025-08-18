import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import CourseDetails from '@/components/template/courses/CourseDetails/CourseDetails'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb title="آموزش جامع توسعه وردپرس"/>
    <CourseDetails/>
    <Footer/>
    </>
  )
}

export default page