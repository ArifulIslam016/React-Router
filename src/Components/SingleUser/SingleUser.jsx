import { useState } from "react";
import { Link, Navigate } from "react-router";

const SingleUser = ({ user }) => {
  const { name, id,} = user;
  const Style={
    backgroundColor:"gray",
    padding:"20px",
    margin:"30px"
  }
  const [status, setstatus] = useState(false);
  const [HomeStatus, setHomeStatus] = useState(false);
  if(HomeStatus){
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <div style={Style}>
      <h1>{name}</h1>
      <h2>{user.address.city}</h2>
      <Link to={`/User/${id}`}>See More</Link>
      <button onClick={() => setstatus(!status)}>
        {" "}
        {status ? "Hide" : "See"} info
      </button>
      {status && <p>{name}</p>}
      <button onClick={() => setHomeStatus(true)}>Visit Home</button>
    </div>
  );
};

export default SingleUser;
/**
 * {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
address
: 
{street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
company
: 
{name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
email
: 
"Sincere@april.biz"
id
: 
1
name
: 
"Leanne Graham"
phone
: 
"1-770-736-8031 x56442"
username
: 
"Bret"
website
: 
"hildegard.org"
 */
