import React from 'react'
import Container from 'react-bootstrap/Container';
import './styles/Landing.css'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      {/* hero section */}
      <div className='main-container'>
        <Container fluid = "md" className='mt-2'>
          <div className='hero-section d-flex justify-content-center align-items-center'>
            <div className='title-section d-flex flex-column align-items-center justify-content-center'>
              <div className='sub-title1'>our new video uploader</div>
              <div className="main-title">videostack</div>
              <Link to={'/home'}><button className='get-started-btn'>Get started</button></Link>
            </div>
          </div>
        </Container> 
      </div>

      {/* Features section */}
      <Container fluid = "md" className='mt-5 mb-5'>
        <div className="features-section">
          <div className='feature-title'>
            Features
          </div>
          <Row className='row-gap-4'>
            <Col lg={4} md={6} sm={12}>
            <div className="managing-videos-container">
              <div className='image-container w-100'><img className='feature-img' src="https://i.postimg.cc/638QhBCH/15155.jpg" alt="" /></div>
              <div className='card-title'>Managing videos</div>
              <div className='card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur rerum hic aliquam dolorum magnam enim, ab non perferendis soluta similique? Libero neque consectetur unde!</div>
            </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
            <div className="managing-videos-container">
              <div className='image-container w-100'><img className='feature-img' src="https://i.postimg.cc/W31N1T9N/gamer-room-based-on-valorant-v0-UY8-WRy-XPp-QTb4h-Ki0-UI6-Llsgjz0-N-NQMh592-F8qw-R0.webp" alt="" /></div>
              <div className='card-title'>Categorise videos</div>
              <div className='card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur rerum hic aliquam dolorum magnam enim, ab non perferendis soluta similique? Libero neque consectetur unde!</div>
            </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
            <div className="managing-videos-container">
              <div className='image-container w-100'><img className='feature-img' src="https://i.postimg.cc/KzYjVGFS/351-3517976-photo-wallpaper-style-80s-style-nintendo-commodore-retro.jpg" alt="" /></div>
              <div className='card-title'>Watch history</div>
              <div className='card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur rerum hic aliquam dolorum magnam enim, ab non perferendis soluta similique? Libero neque consectetur unde!</div>
            </div>
            </Col>

          </Row>
        </div>
      </Container>
    </>


  )
}

export default Landing
