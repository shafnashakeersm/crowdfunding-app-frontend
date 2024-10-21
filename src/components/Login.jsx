import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import './Login.css'  // Import the CSS file
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate(); //Hook to programmatically navigate
    
    const[input,setInput]=useState(
        {"email":"","password":""}
    )
    const inputHandler = (event) => {
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)

        axios.post("http://localhost:3030/signIn",input).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="Incorrect password") {
                    alert("Incorrect password")
                }
                else if(Response.data.status=="Invalid Email Id") {
                    alert("Invalid Email Id")
                }
                else {
                    let token=Response.data.token 
                    let userId=Response.data.token.userId 
                    console.log(userId)
                    console.log(token)

                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)

                    navigate("/userhome")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    return (
        <div>
            <NavBar/>
            <div className="login-background">
            <div className="card-overlay">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card  text-center w-100 p-3 h-100 d-inline-block">
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label htmlFor="inputPassword6" className="form-label">Username</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                                </div>
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="password" className="form-label">Password</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="password" id="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                                    </div>
                                    <div className="row g-3 justify-content-md-center">
                                        <div className="col-auto ">
                                            <button className="btn btn-primary" onClick={readValues}>SignIn</button>
                                        </div>
                                    </div>
                                    <div className="row g-3 justify-content-md-center">
                                        <div className="col-auto ">
                                            <label htmlFor="" className="form-label">New User?</label>
                                            <a href="/SignUp" className="href">SignUp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;
