import React from 'react'
import './styles/Add.css'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoApi } from '../Services/allApi';
import {  Zoom, toast } from 'react-toastify';


function Add({getAddedVideos}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[apiData, setApiData] = useState({
    title:"",
    coverImg:"",
    videoUrl:""
  })


  const getVideoInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setApiData({...apiData,[name] : value});
  }

  const getVideoUrl = (e) => {
    let baseUrl = "https://www.youtube.com/embed/"
    let name = e.target.name;
    let value = baseUrl + e.target.value.slice(-11);
    setApiData({...apiData,[name]:value});
  }

  const addVideo = async() => {
    const {title,coverImg,videoUrl}=apiData;
    if(title === ""|| coverImg === "" || videoUrl === ""){
      // alert("please fill the fields");
      toast.error('please fill the field', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    }
    else{
      const output = await addVideoApi(apiData);
      if(output.status >= 200 || output.status < 300){
        handleClose();
        // alert("video uploaded successfully");
        toast.success('video uploaded successfully', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
          });
        getAddedVideos(); 
      }
      else{
        // alert("video adding failed")
        toast.error('video adding failed', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
          });
      }
    }
  }

  console.log(apiData);



  return (
    <>
     <div className='video-uploading-container p-5'>
        <div className="upload-title">
          You can upload videos here
        </div>
        <div className="upload-info">
          click on the button below or drag and drop files
        </div>
        <button className='add-video' onClick={handleShow}> + Add Video</button>
      </div> 

      <Modal className='' show={show} onHide={handleClose}>
        <div className='p-5 top-modal' ><div className='modal-title text-center'>Add video</div>
        <input type="text" className=' ps-3 pe-4 mt-3 add-input w-100' name="title" onChange={(e)=>{
          getVideoInput(e);
        }} id="" placeholder='video title' />
        <input type="text" className='ps-3 pe-4 mt-3 add-input w-100' name="coverImg" onChange={(e)=>{
          getVideoInput(e);
        }} id="" placeholder='cover image URL' />
        <input type="text" className='ps-3 pe-4 mt-3 add-input w-100' name="videoUrl" onChange={(e)=>{
          getVideoUrl(e);
        }} id="" placeholder='youtube video URl' />
        </div>
        
        
        <div className='d-flex align-items-center justify-content-center pb-5 bg-black'>
          

          <div className='add-video me-3' style={{cursor:"pointer"}} onClick={()=>{
            addVideo();      
          }}>
            Add
          </div>
          <div className='add-video bg-dark' style={{cursor:"pointer"}} onClick={handleClose}>
            close
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Add
