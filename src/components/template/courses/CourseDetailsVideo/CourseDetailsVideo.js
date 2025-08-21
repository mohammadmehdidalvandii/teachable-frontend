"use client"
import React from 'react';
import ReactPlayer from 'react-player'


function CourseDetailsVideo() {
  return (
    <ReactPlayer 
    style={{borderRadius:"0.5rem"}}
        url='/assets/video/course.mp4' 
        controls={true} 
        autoPlay
        width="100%" 
        height="100%"
    />
  )
}

export default CourseDetailsVideo