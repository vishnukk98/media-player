import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'



function Homee() {

  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between mb-3">
     <div className="add-vidoes"></div>
     <Add setUploadVideoResponse={setUploadVideoResponse}/>
     <Link to={'/watch-history'} style={{textDecoration:"none"}} className="fw-bolder fs-2 text-primary">Watch-History <i class="fa-solid fa-arrow-right"></i></Link>

      </div>
      <div className="container-fluid mt-5 w-100 row">
    <div className="col-lg-9 all-vidoes">
      <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
    </div>
    <div className="col-lg-3 all-category">
      <Category/>
    </div>
      </div>

      
    </>
  )
}

export default Homee
