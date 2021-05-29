
import axios from 'axios';
import {React,useEffect,useState} from 'react'
import 'react-bootstrap';
import Modal from 'react-modal';

const Details = ()=>{

    const [modalIsOpen,setIsOpen] = useState()
    const [position, setposition] = useState()
    const [summary, setsummary] = useState()
    const [link, setlink] = useState()
    
    
    const clicked = ()=>
    {
        setIsOpen(true);
    }
      
      function closeModal(){
        setIsOpen(false);
      }

     const submit = ()=>
     {
        const temp = {
            position : position,
            summary: summary,
            link : link
        }

        axios.post("http://localhost:4000/job/add", temp).then((res)=>{console.log(res)})
     } 
      
    return (
        <>

        <div>

        <Modal
          isOpen={modalIsOpen}
         
          onRequestClose={closeModal}
          //style={customStyles}
          //contentLabel="Example Modal"
        >
        <form style={{paddingLeft:'200px'}}>
            <h1>Enter The Job Details</h1>
        Enter The Position: <br/>
        <input type="text" placeholder="Enter the position " onChange={(e)=>{setposition(e.target.value)}} name="rollno" style={{width:'350px'}}  /><br/> 

        Enter The summary: <br/>
        <textarea id="w3review" name="w3review" onChange={(e)=>{setsummary(e.target.value)}} style ={{heigth:'350px', width:'500px'}} /><br/><br/>

        Enter The Link: <br/>
        <input type="text" placeholder="Enter the Link " onChange={(e)=>{setlink(e.target.value)}} name="rollno" style={{width:'350px'}} /><br/>

        <button style={{width:'100px',backgroundColor:'green'}} onClick={submit}>submit</button>

        <button style={{width:'100px',backgroundColor:'red',marginLeft:'30px'}} onClick={closeModal}>close</button>
        </form>      
        </Modal>

        <button style = {{backgroundColor:'red',width:'150px',marginLeft:'400px'}} onClick={clicked} type="button">Add</button>

        </div>
        </>
    )
}

export default Details;
