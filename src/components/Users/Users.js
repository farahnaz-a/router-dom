import React from "react";
import axios from "axios";
import { useLoaderData, Navigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import './users.css';



const Users = () => { 
        
    let id =  localStorage.getItem('id');
    let data = useLoaderData(); 

    if(!id){
        return <Navigate to="/login" />
    }
    else
    {
        let user = data.find((user) => user.id == id);
        if(user)
        {
          return (
              <Container className="p-5">
                   <Table striped bordered hover>
                          <thead>
                              <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Address</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                 data.map((user) => (
                                  <tr key={user.id} className={id == user.id ? 'matched' : ''}>
                                      <td>{user.id}</td>
                                      <td>{user.name}</td>
                                      <td>{user.username}</td>
                                      <td>{user.email}</td>
                                      <td>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</td>
                                  </tr>
                                 ))
                              }
                          </tbody>
                      </Table>
              </Container>
          )
        }
        else 
        {  
          return <Navigate to="/login" />
        }
    }
     
        
}

export default Users;

export async function users() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');;
    return response.data;
}