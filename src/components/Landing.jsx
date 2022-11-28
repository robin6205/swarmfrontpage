import React from 'react'
import demoVideo from '../media/map3-3short.mp4';
import dataGraph from '../media/RendezvousCommunicationGraph.png';
import UserInterface from '../media/UserInterface.PNG';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { Divider } from 'semantic-ui-react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'



const competitionLink =
  "https://www.youtube.com/watch?v=m_jBq4SxsJU&t=6s&ab_channel=CodexLaboratoriesLLC";

function Landing() {
  return (
    <div className="landing">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
      </style>
      <div className='video-background'>

        <h1 className='title'>SWARM Simulation Platform</h1>
        <h3 className='subtitle'>SWARM helps build the future of AI-enabled autonomous robotics through cloud-based, easily scalable, photorealistic simulation</h3>
        <div className="gradient-overlay">
          <video className='video-foreground' autoPlay loop muted>
            <source src={demoVideo} type='video/mp4' />
          </video>
          {/* <video className='video-foreground' src={demoVideo} autoPlay loop muted /> */}
          <AiFillCaretDown className='downicon' />
        </div>
      <button className='startbutton' color="#f194ff" onClick={() => window.open("https://www.swarmsim.io/users/sign_up")}>Get Started</button>
      </div>


      <div className='descriptions'>

        <h1 className='descriptiontitle'>What is SWARM?</h1>
        <p className='description'>SWARM is a cloud-based simulation platform that provides a simple easy-to-use user interface for building autonomous flight control algorithms used by all levels of background. It is designed to be a flexible and extensible platform for researchers to develop and test new swarm flight control algorithms using various simulated environment. It is built on top of the open-source flight simulator AirSim, and is designed to be compatible with the PX4 flight stack.</p>

        <div className='row'>
          <div className='column'>
            <Card className='functionality'>
              <h2>Simulation Engine</h2>
              <p>The SWARM simulation platform features a novel cloud-based architecture that automates the entire test process by allowing developers to live stream the advanced simulation graphics in various testing environments, with no installation.  </p>
              <button type="button" className='detailsbutton' onClick={() => window.open("https://www.swarmsim.io/overview/information")}>Details</button>
              <iframe className="detailmedia" src="https://www.youtube.com/embed/VLWUpgyu3vg?mute=1"title="competitionvid" allowFullScreen autoPlay muted></iframe>
            </Card>
          </div>

          <div className='column'>
            <Card className='functionality'>
              <h2>Data analysis</h2>
              <p>The SWARM simulation platform provides automated performance analysis including comprehendsive data sets and helpful visualizations allowing users to streamline the data analysis process.</p>
              <button type="button" className='detailsbutton' onClick={() => console.log('Simple Button pressed')}>Details</button>
              <img className="detailmedia" src={dataGraph} alt="dataGraph" />
            </Card>
          </div>

          <div className='column'>
            <Card className='functionality'>
              <h2>Algorithm builder</h2>
              <p>Users can design custom algorithms using easy-to-use graphical user interface with minimal code. With various open-source API's and third-party libraries, flight control algorithms can be built according to the user's needs. Built-in obstacle avoidance and path planning algorithms are provided to easily get started in the development process.</p>
              <button type="button" className='detailsbutton' onClick={() => window.open("https://www.swarmsim.io/dashboard/knowledge/index")}>Details</button>
              <img className='detailmedia' src={UserInterface} alt="UserInterface" />
            </Card>
          </div>

          <div className='column'>
            <Card className='functionality'>
              <h2>Community Space</h2>
              <p>Developers can use the community forum to share your simulation results/progress and ask questions. Sign up now and join the community to share the latest research development in multi-agent and singular UAV algorithms.</p>
              <button type="button" className='detailsbutton' onClick={() => console.log('Simple Button pressed')}>Details</button>
              <BsFillPeopleFill className='detailmedia' />
            </Card>
          </div>
        </div>
      </div>

      {/* <Card className='functionality'>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="testcard">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Img variant="top" src={dataGraph}/>
    </Card> */}


      <div className='video-background'>

        <h1 className='title'>SWARM simulation Competition</h1>
        <h3 className='subtitle'>Develop your own drone flight control algorithms and compete against others</h3>
        <h3 className='subtitle2'>Sign up now to participate in the competition</h3>
        <div className="gradient-overlay">
          {/* <video className='video-foreground' autoPlay loop muted> */}
            {/* <source src={demoVideo} type='video/mp4' /> */}
            <iframe className='competeVideo' src="https://www.youtube.com/embed/BojQ_xW_72k?version=3&autoplay=1&loop=1&mute=1&controls=0&playlist=BojQ_xW_72k,"title="competitionvid" allowFullScreen autoPlay muted></iframe>
          {/* </video> */}
          {/* <video className='video-foreground' src={demoVideo} autoPlay loop muted /> */}
        </div>
      <button className='competebutton' color="#f194ff" onClick={() => console.log('Simple Button pressed')}>View Competition</button>
      </div>




      <div className='links'>

        <Container>
          <h2 className='descriptiontitle'>Documentation</h2>
          <p>Learn more about the open-source API Colosseum and detailed tutorials</p>
          {/* button link to youtube */}
          <button type="button" className='detailsbutton' onClick={() => window.open("https://codexlabsllc.github.io/web-portal/index.html")}>Docs</button>
        </Container>
        <Divider vertical></Divider>
        <Container>
          <h2 className='descriptiontitle'>About us</h2>
          <p>Meet the team behind SWARM Research</p>
          <button type="button" className='detailsbutton' onClick={() => window.open("https://www.swarmsim.io/overview/about_us")}>About</button>
        </Container>
      </div>


    </div>



  )
}

export default Landing