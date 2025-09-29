import React, { use } from 'react';
import SingleUser from '../SingleUser/SingleUser';
// import { useLoaderData } from 'react-router';

const User = ({UserPromise}) => {
  const users = use(UserPromise);
//   console.log(users);
  return (
    <div>
      <h1>This is user Section</h1>
      <div>
        {
            users.map(user=><SingleUser key={user.id} user={user}></SingleUser>)
        }
      </div>
    </div>
  );
};

export default User;