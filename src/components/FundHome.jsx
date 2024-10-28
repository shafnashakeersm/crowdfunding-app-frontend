import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FundHome.css'; // Import custom styles if needed

const FundHome = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleviewmedpostClick = () => {
        navigate('/viewmedpost'); // Navigate to the medical post page
    };

    const handleviewfudpostClick = () => {
        navigate('/viewfudpost'); // Navigate to the food post page
    };

    const handleviewcmppostClick = () => {
        navigate('/viewcmppost'); // Navigate to the campaign post page
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Fundraising Categories</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <img
                            src="https://lirp.cdn-website.com/ce8cbdfc/dms3rep/multi/opt/Start+a+Free+Fundraising+for+Critical+Patients-640w.jpg"
                            className="card-img-top"
                            alt="Medical fundraising for critical patients"
                            height="269px"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">MEDICAL</h5>
                            <button className="btn btn-primary" onClick={handleviewmedpostClick}>
                                Click Here
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <img
                            src="https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.jpg?s=612x612&w=0&k=20&c=uAUDyZRdpReAW51hD29W7fOCTDzNrOdHkAdKXErbapU="
                            className="card-img-top"
                            alt="Food support for children"
                            height="269px"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">FOOD</h5>
                            <button className="btn btn-primary" onClick={handleviewfudpostClick}>
                                Click Here
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <img
                            src="https://img.freepik.com/premium-photo/men-women-different-ages-nationalities-are-putting-together-puzzle-top-view-concept-mental-health-care-campaign-togetherness-charity-love-donation-helping-hands_503750-3883.jpg"
                            className="card-img-top"
                            alt="Campaign for mental health care"
                            height="269px"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">CAMPAIGN</h5>
                            <button className="btn btn-primary" onClick={handleviewcmppostClick}>
                                Click Here
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FundHome;
