import axios from 'axios';
import React, { useState } from 'react';
import './CampPost.css'; // Import custom styles

const CampPost = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
        campname: "",
        place: "",
        mode: "",
        phone: "",
        email: "",
        purpose: ""
    });

    // Handle form input changes
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    // Read values and send POST request
    const readValues = () => {
        if (!token) {
            alert("Token is missing. Please login again.");
            return;
        }

        axios.post("http://localhost:3030/camppost", input, {
            headers: {
                "token": token,
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.data.status === "success") {
                alert("Posted Successfully");
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
                <h2 className="text-center mb-4">Campaign Posting</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="campname" className="form-label">Campaign Name</label>
                            <input type="text" className="form-control" name="campname" value={input.campname} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="place" className="form-label">Place</label>
                            <textarea name="place" className="form-control" value={input.place} onChange={inputHandler}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mode" className="form-label">Campaign Mode</label>
                            <select name="mode" className="form-control" value={input.mode} onChange={inputHandler}>
                                <option value="">Select</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone No</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="purpose" className="form-label">Campaign Purpose</label>
                            <textarea name="purpose" className="form-control" value={input.purpose} onChange={inputHandler}></textarea>
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

export default CampPost;
