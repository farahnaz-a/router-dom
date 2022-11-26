import axios from "axios";
import React from "react"; 
import { Form, useActionData, redirect, Navigate  } from "react-router-dom";
import './login.css';



const Login = () => {
    let error = useActionData();

    let id = localStorage.getItem('id');
    if(id){
      
      return <Navigate to="/users" />
    }
   
    return (
        <div className="Auth-form-container">
        <Form className="Auth-form" action="/login" method="post">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            {
              error && error.username ? <div className="alert alert-danger mt-3">{error.username}</div> : null
            }
            
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#!">Fogot username?</a>
            </p>
          </div>
        </Form>
      </div>
    )
}

export default Login;

export async function login({request}) {
      

       const username = await request.formData(); 
        let err = {};
        if(!username.get('username')) {
            err.username = 'Username is required';
        }
        else 
        {
            async function usersData() {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');;
                return response.data;
            }

            let data = await usersData(); 
            let user = data.find((user) => user.username === username.get('username'));
            if(!user) {
                err.username = 'Username is not valid';
            }
            else 
            {
             

              localStorage.setItem('id', JSON.stringify(user.id));
              return redirect("/users");

            }
            
        }

        return err;
        

}