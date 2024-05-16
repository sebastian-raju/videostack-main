import React, { useEffect } from 'react'
import './styles/VideoCard.css'
import { Col } from 'react-bootstrap'
import { Play, Trash2 } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, deleteVideoApi } from '../Services/allApi';



function VideoCard({videoObj,getAddedVideos}) {


  const {id, title,coverImg,videoUrl} = videoObj;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const deleteVideo = async () => {
    const result = await deleteVideoApi(id);
    if(result.status>=200 || result.status<300){
      getAddedVideos();
    }
    else{
      alert("video deletion failed");
    }
  }

  const addVideoHistory = async() => {
    const videoTime = new Date().toLocaleString();
    const {title,videoUrl} = videoObj;
    return await addHistoryApi({
      title,
      videoUrl,
      ["date&time"]:videoTime
    })
  }


  const draggingStart = (e,id) => {
    e.dataTransfer.setData("cardId",id);
  }



  return (
    <Col lg={4}>
      <div draggable onDragStart={(e)=>{draggingStart(e,id)}} className='video-card-container'>
        <div className="video-card-img-container w-100" style={{cursor:"pointer"}} 
          onClick={()=>{
            handleShow();
            addVideoHistory();
            // Call addVideoHistory when the user clicks
          }}>
          <img className='w-100 thumbnail' src={coverImg} alt="" />
          <div className="play-button">
            <Play size={50} strokeWidth={3} className='play-icon'></Play>
          </div>
          <div className="delete-button">
            
          </div>
        </div>
        <Trash2 size={30} strokeWidth={1.5} onClick={deleteVideo} className='delete-button'></Trash2>
        <div className='video-title' style={{width:"200px", color:"grey"}}>{title}</div>
      </div>
      

      <Modal show={show} onHide={handleClose} animation={false} className="my-modal">
        <Modal.Header className='bg-black border-0 d-flex justify-content-end' >
          {/* <Modal.Title>Modal heading</Modal.Title> */}
          <Button className='rounded-circle btn btn-danger' onClick={handleClose} style={{lineHeight:"16px", fontSize:"18px", padding:"10px 13px"}}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body className='bg-black'>
        <iframe className='w-100' height="315" src={`${videoUrl}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer className='bg-black border-0' style={{height:"60px"}}>
          
        </Modal.Footer>
      </Modal>
    </Col>
  )
}

export default VideoCard
