import React from 'react'
import NavBar from './NavBar'

const Login = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
                        <div class="card border-light mb-3">
                            <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>


                    <div class="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
                        <div class="card position- top-50 start-50 translate-middle text-center">
                            <div class="card text-center w-100 p-3 h-100 d-inline-block bg-light primary border border-primary-subtle">

                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="form-label">Username</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" id="" class="form-control" />
                                    </div>

                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="password" class="form-label">Password</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="password" id="password" class="form-control"  />
                                        </div>
                                       

                                        <div class="row g-3 justify-content-md-center">
                                            <div class="col-auto ">
                                                <button className="btn btn-primary">LogIn</button>
                                            </div>
                                        </div>

                                        <div class="row g-3 justify-content-md-center">
                                            <div class="col-auto ">
                                                <label htmlFor="" className="form-label">New User?</label>
                                                <a href="" className="href">SignUp</a>
                                            </div>
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

export default Login