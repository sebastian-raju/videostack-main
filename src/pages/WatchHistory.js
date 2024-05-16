import React, { useEffect, useState } from 'react'
import './styles/WatchHistory.css'
import { Container } from 'react-bootstrap'
import { Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import { accessHistoryApi, deleteHistoryApi } from '../Services/allApi'

function WatchHistory() {
  const [historyData, setHistoryData] = useState([]);
  const [historyDataCopy, setHistoryDataCopy] = useState([]);

  const getVideoHistory = async () => {
    const {data} = await accessHistoryApi();
    setHistoryData(data);
    setHistoryDataCopy(data);
  }

  const deleteVideoHistory = async(id) => {
    const response = await deleteHistoryApi(id);
    if(response.status>=200 || response.status<300){
      getVideoHistory();
    }
    else{
      alert("history deletion failed");
    }
  }


  const getRecentlyWatched = () =>{

      const copyData = [...historyData];
      const dateFromStr = str => new Date(str);
      const data = copyData.sort((a,b) => dateFromStr(b["date&time"]) - dateFromStr(a["date&time"]) );
      setHistoryDataCopy(data);
  }

  const getAscendingOrderWatched = () => {
    setHistoryDataCopy(historyData);
  }


  useEffect(()=>{
    getVideoHistory();
  },[])


  return (
    <>
      <div className='history-main-home-container'>
          <div className='history-backdropFilter'>
            <Container className='watch-history-container'>
              <div className='text-white d-flex justify-content-between align-items-center mb-4'>
                <div className='history-title'>Watch history</div>
                <Link to={"/home"}><button className='back-button'>Back to home</button></Link>
              </div>
              <button className='watch-recently-btn mb-5  ' onClick={getRecentlyWatched}>recently watched</button>
              <button className='watch-back-btn mb-5  ' onClick={getAscendingOrderWatched}>{"<"}</button>
            <table className='w-100 transparent-table' variant='dark' hover>
      <thead>
      <tr>
        <th className='p-4 jstify-self-center'>#</th>
          <th className='p-4'>Date</th>
          <th className='p-4'>Title</th>
          <th className='p-4'>video URL</th>
          <th className='p-4'></th>
        </tr>
    </thead>
    <tbody className=''>
      {
        historyDataCopy?.map((historyObj, index) =>
        <tr>
          <td className='p-4'>{index + 1}</td>
            <td className='p-4'>{historyObj["date&time"]}</td>
            <td className='p-4'>{historyObj.title}</td>
            <td className='p-4'>{historyObj.videoUrl}</td>
            <td className='p-4'>
              <Trash2 size={17} strokeWidth={1.5} className='delete-icon' onClick={()=> {deleteVideoHistory(historyObj.id)}}></Trash2>
            </td>
        </tr>)
      }
      </tbody>
    </table>

            </Container>
          </div>
        </div>
    </>
  )
}

export default WatchHistory
