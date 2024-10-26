import React from 'react'
import { useNavigate } from 'react-router-dom';

const FundHome = () => {
    const navigate = useNavigate(); //Hook tp programmatically navigate

    const handleviewmedpostClick = () => {
        navigate('/viewmedpost'); //Navigate to the post page

    };

    const handleviewfudpostClick = () => {
        navigate('/viewfudpost'); //Navigate to the post page
    };

    const handleviewcmppostClick = () => {
        navigate('/viewcmppost'); //Navigate to the post page
    };
    return (
        <div>
            <div className="container">
                <div className="">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12 ">
                        <div className="container">
                            <div className="row">
                                <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-md-4 col-xl-4 col-xxl-4 mb-4" >
                                    <div class="card card-background-medical" >
                                        <img src="https://lirp.cdn-website.com/ce8cbdfc/dms3rep/multi/opt/Start+a+Free+Fundraising+for+Critical+Patients-640w.jpg" class="card-img-top" alt="..." height="269px" />
                                        <div class="card-body">
                                            <h5 class="card-title">MEDICAL</h5>
                                            <a href="#" class="btn btn-primary" onClick={handleviewmedpostClick}>Click Here</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-md-4 col-xl-4 col-xxl-4 mb-4 ">
                                    <div class="card card-background-food">
                                        <div class="card-body">
                                            <img src="https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.jpg?s=612x612&w=0&k=20&c=uAUDyZRdpReAW51hD29W7fOCTDzNrOdHkAdKXErbapU=" class="card-img-top" alt="..." height="269px" />
                                            <h5 class="card-title">FOOD</h5>
                                            <a href="#" class="btn btn-primary" onClick={handleviewfudpostClick}>Click Here</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-md-4 col-xl-4 col-xxl-4 mb-4 ">
                                    <div class="card card-background-food" >
                                        <div class="card-body">
                                            <img src="https://img.freepik.com/premium-photo/men-women-different-ages-nationalities-are-putting-together-puzzle-top-view-concept-mental-health-care-campaign-togetherness-charity-love-donation-helping-hands_503750-3883.jpg" class="card-img-top" alt="..." height="269px" />
                                            <h5 class="card-title">CAMPEIGN</h5>
                                            <a href="#" class="btn btn-primary" onClick={handleviewcmppostClick}>Click Here</a>
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

export default FundHome