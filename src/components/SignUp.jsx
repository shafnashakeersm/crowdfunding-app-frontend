import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

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

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        if (input.password==input.cnfPass) {
            let newInput={"name":input.name,"email":input.email,"phone":input.phone,"dob":input.dob,"gender":input.gender,"address":input.address,"city":input.city,"password":input.password}

            axios.post("http://localhost:3030/signUp",newInput).then(
                (Response)=>{
                    console.log(Response.data)
                    if (Response.data.status=="success") {
                        alert("Registered successfully")
                        setInput( {
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
                        setInput( {
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
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card position- top-50 start-50 translate-middle text-center">
                            <div class="card text-center w-100 p-3 h-100 d-inline-block bg-light primary border border-primary-subtle">

                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="Name" class="form-label">Name</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" id="" class="form-control" name='name' value={input.name} onChange={inputHandler}/>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="mail" class="form-label">Mail-Id</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="text" id="" class="form-control" name='email' value={input.email} onChange={inputHandler}/>
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Phone" class="form-label">Phone No</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="text" id="" class="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="" class="form-label">DOB</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="date" id="" class="form-control" name='dob' value={input.dob} onChange={inputHandler} />
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Gender" class="form-label">Gender</label>
                                        </div>
                                        <div class="col-auto" >
                                            <select name="" id="" className="form-control ">
                                                <option value="">select</option>
                                                <option value="">Male</option>
                                                <option value="">Female</option>
                                                <option value="">Others</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Name" class="form-label">Address</label>
                                        </div>
                                        <div class="col-auto">
                                            <textarea name="address" id="" className="form-control" value={input.address} onChange={inputHandler}></textarea>
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Name" class="form-label">City</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="text" id="" class="form-control" name='city' value={input.city} onChange={inputHandler} />
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Name" class="form-label">Password</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="password" id="" class="form-control" name='password' value={input.password} onChange={inputHandler} />
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Name" class="form-label">Confirm Password</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="password" id="" class="form-control" name='cnfPass' value={input.cnfPass} onChange={inputHandler}/>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp