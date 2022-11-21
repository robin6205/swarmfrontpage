import React from 'react'
import demoVideo from '../video/map3-3short.mp4'


function Landing() {
  return (
    <div className="landing">
    <div className='video-background'>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
    </style>
    <h1 className='title'>SWARM Simulation Platform</h1>
    <h3 className='subtitle'>A platform for simulating and visualizing swarm robotics</h3>
    <div className="gradient-overlay">
    <video className='video-foreground' autoPlay loop muted>
      <source src={demoVideo} type='video/mp4' />
    </video>
    {/* <video className='video-foreground' src={demoVideo} autoPlay loop muted /> */}
    </div>  
    </div>
    <button className='startbutton' color="#f194ff" onClick={() => console.log('Simple Button pressed')}>Get Started</button>
    
    


    </div>
    
    
  )
}

export default Landing