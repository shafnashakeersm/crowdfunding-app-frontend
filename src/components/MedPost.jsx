import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MedPost = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
       // userId: sessionStorage.getItem("userId"),
        dob: "",
        gender: "",
        address: "",
        city: "",
        phone: "",
        email: "",
        medhistory: ""
    });

    // Handle form input changes
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    // Read values and send POST request
    const readValues = () => {
        console.log("Input Data: ", input);
        console.log("Token: ", token);

        // Ensure token exists before sending request
        if (!token) {
            alert("Token is missing. Please login again.");
            return;
        }

        axios.post("http://localhost:3030/create", input, {
            headers: { 
                "token": token,
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log("Response Data: ", response.data);
            if (response.data.status === "success") {
                alert("Posted Successfully");
            } else {
                alert("Something went wrong!!!");
            }
        }).catch(error => {
            // Enhanced error handling
            if (error.response) {
                console.log("Response Error: ", error.response.data);
                alert("Server responded with an error!");
            } else if (error.request) {
                console.log("No Response from Server: ", error.request);
                alert("No response from the server. Ensure the backend is running.");
            } else {
                console.log("Axios Error: ", error.message);
                alert("Error occurred: " + error.message);
            }
        });
    };

    return (
        <div>
            <div className="card bg-light primary border border-primary-subtle text-center w-100 p-3 h-100 d-inline-block">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">DOB</label>
                            <input type="date" className="form-control" name="dob" value={input.dob} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <div className="col-auto">
                                <select name="gender" className="form-control" value={input.gender} onChange={inputHandler}>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea name="address" className="form-control" value={input.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone No</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="medhistory" className="form-label">Medical History</label>
                            <textarea name="medhistory" className="form-control" value={input.medhistory} onChange={inputHandler}></textarea>
                        </div>
                    </div>
                </div>
                <div className="row g-3 justify-content-md-center">
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={readValues}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedPost;
