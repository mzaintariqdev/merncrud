import React, { Component,useState } from 'react';
import axios from 'axios';
import {
  Link
  } from "react-router-dom";

class ShowApi extends Component {

   constructor(props) {
        super(props);
        this.state = { 
            studentData: [] 
          };
    }

    componentDidMount=()=> {
       this.showData();
    }
    showData(){
      axios.get('http://localhost:3001/students')
            .then(res => {
                this.setState({ studentData: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    Delete=(id,e)=> {
      e.preventDefault();
      alert(id)
       axios.delete(`http://localhost:3001/students/delete/${id}`).then((res) => {
      alert(" has been deleted successfully");
      this.showData();
      alert("updated data")
    });

    }
 
    render() {
    return (
      <div>
      <Link to="/create" ><button>Add Student Data</button></Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">address</th>
          </tr>
        </thead>
        <tbody>
          {this.state.studentData.map((student, index) => (
              <tr>
                <th scope="row">{index}</th>

                <td>
                  {student.name}
                </td>
                <td dangerouslySetInnerHTML={{ __html: student.address }}></td>
                <td>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    href="#"
                    onClick={(e) => this.Delete(student._id,e)}
                  >
                    <i class="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                  <Link className="btn btn-warning" to={`/edit/${student._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit
                  </Link>
              
                </td>
              </tr>
            ))}
        </tbody>
      </table></div>
    );
  }
}

export default ShowApi;