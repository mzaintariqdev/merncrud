import React, { Component,useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


const AddApi=()=> {
  const history = useHistory();
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
 
const addStudent = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/students/create/', { name,address})
        .then((result) => {
          toast.success('post is done', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          setTimeout(function(){ history.push("/"); }, 3000);

        });
    setName("");
    setAddress("")
    };

    return (
      <div>
      <form onSubmit={addStudent}>

        <input placeholder="name" type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder="address" type="text" onChange={(e)=>{setAddress(e.target.value)}}/>
        <button >Submit</button>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
     
      </form>
  </div>
    );
};

export default AddApi;
