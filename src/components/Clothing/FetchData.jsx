import { Table } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'


function FetchData() {
    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setRecords({ data}))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        <ul>
            {record.map((list, index)=>(
                <li key={index}>{list.id} | {list.name}  </li>

            ))}

        </ul>
    </div>
  )
}

export default FetchData