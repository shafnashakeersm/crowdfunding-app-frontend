import axios from 'axios';
import React, { useState } from 'react';
import './FudPost.css'; // Import custom styles

const FudPost = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
        organisation: "",
        address: "",
        phone: "",
        email: "",
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

        axios.post("http://localhost:3030/fudpost", input, {
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
                <h2 className="text-center mb-4">INFO Post</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="organisation" className="form-label">Organisation Name</label>
                            <input type="text" className="form-control" name="organisation" value={input.organisation} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea name="address" className="form-control" value={input.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone No</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Mail-Id</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="row g-3 justify-content-md-center">
                            <div className="col-auto">
                                <button className="btn btn-primary" onClick={readValues}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FudPost;
