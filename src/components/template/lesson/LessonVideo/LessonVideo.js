"use client"
import React from 'react'
import ReactPlayer from 'react-player'

function LessonVideo() {
  return (
     <ReactPlayer 
    style={{borderRadius:"0.5rem" ,height:'70dvh'}}
        url='/assets/video/course.mp4' 
        controls={true} 
        autoPlay
        width="100%" 
        height="100%"
    />
  )
}

export default LessonVideo