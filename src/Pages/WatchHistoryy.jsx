import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'






function WatchHistoryy() {

  const[history,setHistory]=useState([])


  useEffect(()=>{
    getHistory()

  },[])
    
  const getHistory=async()=>{
    const result = await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("api failed");
      setHistory(result.message)
      
    }
  }

  console.log(history);

  const removeVideoHistory = async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  



 
  


  return (
    <>
    <div className="container mt-5 mb-3 d-flex justify-content-between">
      <h2>Watch-History</h2>
      <Link style={{textDecoration:"none",color:"blueviolet",fontSixze:"30px"}} to={"/home"} ><span className='fs-3'>Back To Home </span><i class="fa-solid fa-arrow-rotate-left fs-4"></i></Link>

    </div>
    <div className="container mt-5 mb-3 w-100">
      <table className='table shadow w-100 p-3 m-2'>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Video Url</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
       

        {

          history?.length>0?history.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link}>{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td><button className='text-danger btn' onClick={()=>removeVideoHistory(video?.id)}><i class="fa-solid fa-trash"></i></button></td>
          </tr>

          )):<p className='text-danger fw-bolder'>Nothing to display</p>
          
         
}



      </table>
    </div>
      
    </>
  )
}

export default WatchHistoryy
