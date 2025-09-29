import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const UDetails=useLoaderData()
    let Navigate= useNavigate()
  const BacktoPrevious=()=>{
    Navigate('/User')
  }
  const params= useParams()
  console.log(params)
    return (
      <div>
        <h1>This is details Sections</h1>
        <div>
          <h1>{UDetails.website}</h1>
          <button onClick={BacktoPrevious}>Go Home</button>
        </div>
      </div>
    );
};

export default UserDetails;