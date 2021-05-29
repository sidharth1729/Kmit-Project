import React, { useEffect,useState } from 'react'
import Cards from './Cards'
import './Job.css'
import Details from '../Details/Details'
import axios from 'axios'

const Job = () => {

    const [arr, setarr] = useState([])

    axios.get("http://localhost:4000/job/find").then((res)=>{setarr(res.data)})

    const temp = arr.map((job) => (<Cards tittle = {job.position} summary ={job.summary} link = {job.link}/>) )

    return (
        <>
            
           <div className="head"> <h1 style={{textAlign:'center',color:'white',paddingTop:'20px'}}>The Job Portal</h1> </div>

           <div style ={{paddingTop:'50px', paddingLeft:'10%'}}>
                <Cards tittle = 'Software Engineer' summary='my name is sidharth'/>
                <Cards tittle = 'Technology Intern' summary='my name is sidharth'/>

                {temp}
                
            </div>
          
            <Details/>
        </>
    )
}

export default Job
