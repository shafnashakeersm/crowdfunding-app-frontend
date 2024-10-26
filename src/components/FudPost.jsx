import axios from 'axios';
import React, { useState } from 'react'

const FudPost = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
        // userId: sessionStorage.getItem("userId"),
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
        console.log("Input Data: ", input);
        console.log("Token: ", token);

        // Ensure token exists before sending request
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
                            <label htmlFor="Name" className="form-label">Organisation Name</label>
                            <input type="text" className="form-control" name="organisation" value={input.organisation} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Address</label>
                            <textarea name="address" className="form-control" value={input.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Phone No</label>
                                <textarea name="phone" className="form-control" value={input.phone} onChange={inputHandler}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">Mail-Id</label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                            </div>

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
    )
}

export default FudPost