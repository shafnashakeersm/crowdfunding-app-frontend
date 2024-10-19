import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate(); //Hook tp programmatically navigate

  const handleLoginClick=()=>{
    navigate('/login'); //Navigate to the login page
  };
  return (
    <div>
      <nav class="navbar bg-light primary" >

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CROWDFUNDING </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
      </ul>
     
     
      <button className="btn btn-outline-primary ms-5" type="button" onClick={handleLoginClick}>Login</button>
     

     
    </div>
  </div>
  </nav>
</nav>
    </div>
  )
}

export default NavBar