import React from 'react'
import demoVideo from '../media/map3-3short.mp4'
import dataGraph from '../media/RendezvousCommunicationGraph.png'
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
// import { Icon } from 'semantic-ui-react'
import { AiFillCaretDown } from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <h3 className='subtitle'>Simulation platform for autonomous drone swarm flight control development</h3>
        <div className="gradient-overlay">
          <video className='video-foreground' autoPlay loop muted>
            <source src={demoVideo} type='video/mp4' />
          </video>
          {/* <video className='video-foreground' src={demoVideo} autoPlay loop muted /> */}
        <AiFillCaretDown className='downicon'/>
        </div>
        
      </div>
      <button className='startbutton' color="#f194ff" onClick={() => console.log('Simple Button pressed')}>Get Started</button>
      <div className='descriptions'>

        <h1 className='descriptiontitle'>What is SWARM?</h1>
        
        <p className='description'>SWARM is a cloud-based simulation platform that provides a simple easy-to-use user interface for building autonomous flight control algorithms used by all levels of background. It is designed to be a flexible and extensible platform for researchers to develop and test new swarm flight control algorithms using various simulated environment. It is built on top of the open-source flight simulator AirSim, and is designed to be compatible with the PX4 flight stack.</p>
        
        
        <Card className='functionality'>

          <h2 className='functionalityheader'>Simulation Engine</h2>
          <p className='description'>The SWARM simulation platform features a novel cloud-based architecture that automates the entire test process by allowing developers to live stream the advanced simulation graphics in various testing environments, with no installation.  </p>
          <button type="button" className='detailsbutton' onClick={() => console.log('Simple Button pressed')}>Details</button>
          <iframe className="engineDemo" src="https://www.youtube.com/embed/BojQ_xW_72k" allowFullScreen autoPlay muted></iframe>

        </Card>


        <Card className='functionality'>
          <h2 className='functionalityheader'>Data analysis</h2>
          <p>The SWARM simulation platform provides automated performance analysis including comprehendsive data sets and helpful visualizations allowing users to streamline the data analysis process.</p>
          <button type="button" className='detailsbutton' onClick={() => console.log('Simple Button pressed')}>Details</button>
          <img className="dataGraph" src={dataGraph} alt="dataGraph" />
        </Card>
        <Card className='functionality'>
          <h2 className='functionalityheader'>Algorithm builder</h2>
          <p>Users can design custom algorithms using easy-to-use graphical user interface with minimal code. With various open-source API's and third-party libraries, flight control algorithms can be built according to the user's needs. Built-in obstacle avoidance and path planning algorithms are provided to easily get started in the development process.</p>
          <button type="button" className='detailsbutton' onClick={() => console.log('Simple Button pressed')}>Details</button>
        </Card>
      <Card className='functionality'>
        <h2 className='functionalityheader'>Community Space</h2>
        <p>Developers can use the community forum to share your simulation results/progress and ask questions. Sign up now and join the community to share the latest research development in multi-agent and singular UAV algorithms.</p>
        <button type="button" className='detailsbutton' onClick={() => console.log('Simple Button pressed')}>Details</button>
      </Card>
    </div>

    {/* <Card className='functionality'>
      <Card.Img variant="top" src={dataGraph}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    


    </div>



  )
}

export default Landing