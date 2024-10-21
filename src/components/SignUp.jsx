import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import './SignUp.css';

const SignUp = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "email": "",
            "phone": "",
            "dob": "",
            "gender": "",
            "address": "",
            "city": "",
            "password": "",
            "cnfPass": ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        if (input.password == input.cnfPass) {
            let newInput = { "name": input.name, "email": input.email, "phone": input.phone, "dob": input.dob, "gender": input.gender, "address": input.address, "city": input.city, "password": input.password }

            axios.post("http://localhost:3030/signUp", newInput).then(
                (Response) => {
                    console.log(Response.data)
                    if (Response.data.status == "success") {
                        alert("Registered successfully")
                        setInput({
                            "name": "",
                            "email": "",
                            "phone": "",
                            "dob": "",
                            "gender": "",
                            "address": "",
                            "city": "",
                            "password": "",
                            "cnfPass": ""
                        })
                    } else {
                        alert("Email Id already exist")
                        setInput({
                            "name": "",
                            "email": "",
                            "phone": "",
                            "dob": "",
                            "gender": "",
                            "address": "",
                            "city": "",
                            "password": "",
                            "cnfPass": ""
                        })
                    }
                }
            ).catch()
        } else {
            alert("password and confirm password doesn't match")
        }
    }
    return (
        <div className="signup-background">
            <div className="card-overlay">
                <div className="card bg-light primary border border-primary-subtle text-center w-100 p-3 h-100 d-inline-block">
                    <div className="row">
                        
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="Name" class="form-label">Name</label>
                                <input type="text" id="" class="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>

                            <div className="mb-3">
                                <label for="mail" class="form-label">Mail-Id</label>
                                <input type="text" id="" class="form-control" name='email' value={input.email} onChange={inputHandler} />

                            </div>

                            <div className="mb-3">
                                <label for="Phone" class="form-label">Phone No</label>
                                <input type="text" id="" class="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>

                            <div className="mb-3">
                                <label for="" class="form-label">DOB</label>
                                <input type="date" id="" class="form-control" name='dob' value={input.dob} onChange={inputHandler} />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="Gender" class="form-label">Gender</label>
                                <div class="col-auto" >
                                    <select name="" id="" className="form-control ">
                                        <option value="">select</option>
                                        <option value="">Male</option>
                                        <option value="">Female</option>
                                        <option value="">Others</option>
                                    </select>
                                </div>
                            </div>



                            <div className="mb-3">
                                <label for="Name" class="form-label">Address</label>
                                <textarea name="address" id="" className="form-control" value={input.address} onChange={inputHandler}></textarea>
                            </div>


                            <div className="mb-3">
                                <label for="Name" class="form-label">City</label>
                                <input type="text" id="" class="form-control" name='city' value={input.city} onChange={inputHandler} />
                            </div>


                            <div className="mb-3">
                                <label for="Name" class="form-label">Password</label>
                                <input type="password" id="" class="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>


                            <div className="mb-3">
                                <label for="Name" class="form-label">Confirm Password</label>
                                <input type="password" id="" class="form-control" name='cnfPass' value={input.cnfPass} onChange={inputHandler} />
                            </div>
                        </div>
                    </div>


                    <div class="row g-3 justify-content-md-center">
                        <div class="col-auto ">
                            <button className="btn btn-primary" onClick={readValue}>Submit</button>
                        </div>
                    </div>

                    <div class="row g-3 justify-content-md-center">
                        <div class="col-auto ">
                            <a href="/login" className="href">Back to login page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SignUp