import React from 'react'
import demoVideo from '../video/map3-3short.mp4'


function Landing() {
  return (
  
    <div className='video-background'>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
</style>
    <h1 className='title'>SWARM Simulation Platform</h1>
    <div className="gradient-overlay">
    {/* <video className='video-foreground' autoPlay loop muted>
      <source src={demoVideo} type='video/mp4' />
    </video> */}
    <video className='video-foreground' src={demoVideo} autoPlay loop muted />
    </div>  
    
    </div>
  )
}

export default Landing