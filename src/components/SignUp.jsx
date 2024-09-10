import React from 'react'
import NavBar from './NavBar'

const SignUp = () => {
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
                                        <input type="text" id="" class="form-control" />
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="mail" class="form-label">Mail-Id</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="text" id="" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Phone" class="form-label">Phone No</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="text" id="" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="" class="form-label">DOB</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="date" id="" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Gender" class="form-label">Gender</label>
                                        </div>
                                        <div class="col-auto">
                                            <select name="" id="" className="form-control">
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
                                            <textarea name="" id="" className="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="Name" class="form-label">City</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="text" id="" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row g-3 justify-content-md-center">
                                        <div class="col-auto ">
                                            <button className="btn btn-primary">Submit</button>
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