import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const UDetails=useLoaderData()
    return (
      <div>
        <h1>This is details Sections</h1>
        <div>
          <h1>{UDetails.website}</h1>
        </div>
      </div>
    );
};

export default UserDetails;