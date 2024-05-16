import React from 'react'
import "./styles/Home.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Add from '../components/Add';
import Videos from '../components/Videos';
import Categories from '../components/Categories';
import { Row, Col } from 'react-bootstrap';

import { accessVideoApi } from '../Services/allApi'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';


function Home() {

  const [videoList, setVideoList] = useState([]);

  const getAddedVideos = async () => {
    const {data} = await accessVideoApi();
    setVideoList(data);
  }

  useEffect(()=>{
    getAddedVideos();
  },[])



  return (
    <>
      <div className='main-home-container'>
          <div className='backdropFilter d-flex flex-column justify-content-center align-items-center'>
            <Container fluid = "md" className='mt-2'>
              <Row className='h-100'>
                <Col lg={6} className='d-flex align-items-center'>
                  <div className="home-left-section-container">
                    <div className='home-title' >Start uploading videos</div>
                    <Link to={"/history"}><button className='sub-title'>View watch history</button></Link>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className='align-items-center'>
                    <Add getAddedVideos={getAddedVideos}/>
                  </div>
                </Col>
              </Row>
            </Container> 
          </div>
        </div>
  
        <Container fluid="md" className='mt-4 all-video-section'> 
          <Row className=''>
            <Col lg={8}>
              <Videos videoList = {videoList} getAddedVideos={getAddedVideos}/>
            </Col>

            <Col lg={4}>
              <Categories/>
            </Col>
          </Row>
        </Container>
        <ToastContainer/>
    </>
    )
    
}

export default Home
