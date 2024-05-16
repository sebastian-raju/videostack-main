import React from 'react'
import { Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import './styles/Videos.css'


function Videos({videoList, getAddedVideos}) {

  // const [videoList, setVideoList] = useState([]);

  // const getAddedVideos = async () => {
  //   const {data} = await accessVideoApi();
  //   setVideoList(data);
  // }


  // useEffect(()=>{
  //   getAddedVideos();
  // },[])



  return (
    <div>
      <Row className='row-gap-5'>
       
       {
        videoList.map(video => <VideoCard key={video.id} videoObj={video} getAddedVideos={getAddedVideos}/>)
       }
        
  
      </Row>
    </div>
  )
}

export default Videos
