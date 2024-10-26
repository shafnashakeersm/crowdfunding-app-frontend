import axios from 'axios';
import React, { useState } from 'react'

const CampPost = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
       // userId: sessionStorage.getItem("userId"),
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
        console.log("Input Data: ", input);
        console.log("Token: ", token);

        // Ensure token exists before sending request
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
                            <label htmlFor="Name" className="form-label">Campeign Name</label>
                            <input type="text" className="form-control" name="campname" value={input.campname} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Place</label>
                            <textarea name="place" className="form-control" value={input.place} onChange={inputHandler}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Class Mode</label>
                            <div className="col-auto">
                                <select name="mode" className="form-control" value={input.mode} onChange={inputHandler}>
                                    <option value="">Select</option>
                                    <option value="Male">Online</option>
                                    <option value="Female">Offline</option>
                                </select>
                            </div>
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
                            <label htmlFor="medhistory" className="form-label">Campeign Purpose</label>
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
  )
}

export default CampPost