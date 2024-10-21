import React from 'react';
import './UserHome.css';

const UserHome = () => {
    return (
        <div style={{
            backgroundColor: "#1f2631", // You can change this to any color you prefer
            height: "150vh" // Ensure it covers the full viewport height
        }}>
            <div className="container">
                <div className="">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12 ">
                        <div className="container">
                            <div className="row">
                                <div  className="col col-6 col-sm-6 col-md-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6 mb-4" >
                                    <div class="card card-background-medical" >
                                        <img src="https://lirp.cdn-website.com/ce8cbdfc/dms3rep/multi/opt/Start+a+Free+Fundraising+for+Critical+Patients-640w.jpg" class="card-img-top" alt="..." height="269px" />
                                        <div class="card-body">
                                            <h5 class="card-title">MEDICAL</h5>
                                          //  <p class="card-title">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                            <a href="#" class="btn btn-primary">Click Here</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6 mb-4 ">
                                    <div class="card card-background-food">
                                        <img src="https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.jpg?s=612x612&w=0&k=20&c=uAUDyZRdpReAW51hD29W7fOCTDzNrOdHkAdKXErbapU=" class="card-img-top" alt="..."  height="269px"/>
                                        <div class="card-body">
                                            <h5 class="card-title">FOOD</h5>
                                           // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Click Here</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6 mb-4 ">
                                    <div class="card card-background-food" >
                                        <img src="https://img.freepik.com/premium-photo/men-women-different-ages-nationalities-are-putting-together-puzzle-top-view-concept-mental-health-care-campaign-togetherness-charity-love-donation-helping-hands_503750-3883.jpg" class="card-img-top" alt="..."  height="269px"/>
                                        <div class="card-body">
                                            <h5 class="card-title">CAMPEIGN</h5>
                                           // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Click Here</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6 mb-4 ">
                                    <div class="card card-background-food" >
                                        <img src="https://cdn.prod.website-files.com/5ef22750acc5c463b2f8052b/6478e71a9688990bcafd64c2_donate%20website%20(1).png" class="card-img-top" alt="..."  height="269px"/>
                                            <div class="card-body">
                                                <h5 class="card-title">START FUNDRAISING</h5>
                                                //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-primary">Start Now</a>
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

export default UserHome