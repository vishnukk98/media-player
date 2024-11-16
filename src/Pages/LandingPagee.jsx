import React from 'react'
import { Card, Col,  Container,  Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Container




function LandingPagee() {
  return (
    <>
    {/* Head */}
    <Row className="mt-5 align-items-center justify-content-between w-100">
      <Col></Col>
      <Col lg={5}>
      <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media Player</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio doloremque inventore facere ab voluptatum quis! Ea, sed quidem ratione iste numquam quam iure amet blanditiis. Iure saepe nobis sint!
      Ratione non cum, consectetur nesciunt quas sapiente, possimus, eos vitae minus voluptatum distinctio dolorum soluta eaque doloribus cumque! Adipisci exercitationem sunt sint quae earum quidem. Sapiente amet cum ducimus dignissimos.</p>
      <Link style={{textDecoration:"none"}} to={'/home'} className="btn btn-info">Get Started</Link>

      </Col> 
      <Col lg={5}>
      <img src='https://cdn.dribbble.com/users/1036808/screenshots/7282712/83.audio_visualizer_perspective_3d2.gif' alt='' width="650px" />

      </Col>
      <Col></Col>

    </Row>

    <div className='container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100'>
      <h2 className='text-center text-warning'>Features</h2>
      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media0.giphy.com/media/NsBknNwmmWE8WU1q2U/giphy.webp?cid=790b7611n3si5vckshwg07m83qneqj497cnop1sxp90dxjcs&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
      <Card.Body>
        <Card.Title>Managing Vidoes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media0.giphy.com/media/b1fc5DRvglFFS/giphy.webp?cid=790b7611n3si5vckshwg07m83qneqj497cnop1sxp90dxjcs&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNzaTV2Y2tzaHdnMDdtODNxbmVxajQ5N2Nub3Axc3hwOTBkeGpjcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/30pjsLvNyaRY0eoE0b/giphy.webp" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>

    </div>

    {/* Details section */}

    <div className="container border border-2 border-white rounded d-flex align-items-center justify-content-center mt-5 p-3">
      <div className="col-lg-5">
        <h4 className='text-warning fw-bolder'>Simple,Powerful & Fast</h4>
        <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a, alias quod, aliquid ut quibusdam cum eveniet nulla reiciendis soluta magni odio delectus quisquam. Aspernatur explicabo qui unde quod nostrum.</h6>
        <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a, alias quod, aliquid ut quibusdam cum eveniet nulla reiciendis soluta magni odio delectus quisquam. Aspernatur explicabo qui unde quod nostrum.</h6>
        <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a, alias quod, aliquid ut quibusdam cum eveniet nulla reiciendis soluta magni odio delectus quisquam. Aspernatur explicabo qui unde quod nostrum.</h6>


      </div>
    <div className="col-lg-5">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=MYTHCnQWTlyj1-Tk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

    </div>

    </div>


      
    </>
  )
}

export default LandingPagee
