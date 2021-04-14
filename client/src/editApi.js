import React, { useEffect,useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const EditApi = (props) => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const history =useHistory();
  const id = props.match.params.id;
   useEffect(() => {
   
    axios.get(`http://localhost:3001/students/${id}`).then((res) => {
      setName(res.data.name) ;
      setAddress(res.data.address);
    });
   
  },[]);
   const onSubmit = (e) => {
    e.preventDefault();
      console.log(name);
      axios.put(`http://localhost:3001/students/update/${id}`, { name,address}).then((res) => {
        
          alert("Edited successfully");
      });
    setName("")
    setAddress("")
    setTimeout(function(){ history.push("/"); }, 8000);

  };
  return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label>name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
        
          </div>

          <div className="form-group">
            <label>address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter address"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
            />
           
          </div>
     

          <button
            className="btn btn-success"
            type="submit"
            onClick={onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Submit
          </button>
        </form>
      </div>
  )
}

export default EditApi