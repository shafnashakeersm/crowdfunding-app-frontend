import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MedPost.css'; // Import custom styles

const MedPost = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
        dob: "",
        gender: "",
        address: "",
        city: "",
        phone: "",
        email: "",
        medhistory: ""
    });

    //const notificationSound = new Audio('/sounds/notification.mp3');

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
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
            if (response.data.status === "success") {
                alert("Posted Successfully");
                //notificationSound.play();
            } else {
                alert("Something went wrong!!!");
            }
        }).catch(error => {
            if (error.response) {
                alert("Server responded with an error!");
            } else if (error.request) {
                alert("No response from the server. Ensure the backend is running.");
            } else {
                alert("Error occurred: " + error.message);
            }
        });
    };

    return (
        <div className="container mt-4">
            <div className="card p-4">
                <h2 className="text-center mb-4">Medical Information Post</h2>
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
                            <select name="gender" className="form-control" value={input.gender} onChange={inputHandler}>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
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
