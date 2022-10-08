import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Users() {

const[islodaing,setLoading]=useState(true);
const[users,setUsers]=useState([]);

useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
         .then(res=>{
            setUsers(res.data);
            //setLoading(false)
        })
        .catch((e)=>(console.log(e)))
        .finally(()=>(setLoading(false)))
},[])
  return (
    <div>
        <h1>Users</h1>
        {islodaing && <div>Loading...</div>}
        <ul>
            {
                users.map((data,id)=>(<li key={id}>{
                    data.name
                }</li>))
            }
        </ul>
    </div>
  )
}

export default Users
//