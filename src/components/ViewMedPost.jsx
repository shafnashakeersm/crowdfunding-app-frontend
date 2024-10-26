import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewMedPost = () => {
    const [token] = useState(sessionStorage.getItem("token"))
    const [data, setData] = useState([])

    const fetchData = () => {
        console.log(token)
        axios.post("http://localhost:3030/viewmedpost", {}, {
            headers: { "token": token, "content-Type": "application/json" }
        }).then(
            (Response) => {
                console.log(Response.data)
                setData(Response.data)
            }
        ).catch(
            (error) => { console.log(error) }
        )
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <div className="container">
                <div className="col-12">
                    {data.map((value, index) => (
                        <div key={index} className="card mb-3" style={{ padding: '0.5px', marginBottom: '10px' }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body" style={{ padding: '10px', maxHeight: '400px', position: 'relative' }}>

                                        <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.87em', color: 'gray' }}>
                                            <small>Posted on: {value.PostedDate}</small>
                                        </div>

                                        <h2 className="card-title" style={{ marginBottom: '8px' }}>{value.name}</h2>
                                        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
                                            <p><strong>DOB :</strong></p><p>{value.dob}</p>
                                            <p><strong>GENDER :</strong></p><p>{value.gender}</p>
                                            <p><strong>ADDRESS :</strong></p><p>{value.address}</p>
                                            <p><strong>CITY :</strong></p><p>{value.city}</p>
                                            <p><strong>PHONE NO :</strong></p><p>{value.phone}</p>
                                            <p><strong>MAIL-ID :</strong></p><p>{value.email}</p>
                                            <p><strong>MEDICAL HISTORY :</strong></p><p>{value.medhistory}</p>
                                            <button className="btn btn-danger">DONATE</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewMedPost
