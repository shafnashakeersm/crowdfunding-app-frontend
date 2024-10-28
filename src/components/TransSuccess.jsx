import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Change here

const TransactionSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transactionDetails = location.state?.transactionDetails;

    const handleGoBack = () => {
        navigate('/transaction'); // Adjust path as needed
    };

    if (!transactionDetails) {
        return (
            <div className="container mt-5">
                <h3>Transaction details not available</h3>
                <button onClick={handleGoBack} className="btn btn-primary mt-3">
                    Go Back to Transactions
                </button>
            </div>
        );
    }
    return (
        <div className="container mt-5">
            <div className="card text-center">
                <div className="card-header">
                    <h3>Transaction Successful!</h3>
                </div>
                <div className="card-body">
                    <p>Thank you for your transaction.</p>
                    <h5>Transaction Details:</h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Transaction ID:</strong> {transactionDetails.transactionId}
                        </li>
                        <li className="list-group-item">
                            <strong>Amount:</strong> ${transactionDetails.amount}
                        </li>
                        <li className="list-group-item">
                            <strong>Status:</strong> {transactionDetails.status}
                        </li>
                        <li className="list-group-item">
                            <strong>Description:</strong> {transactionDetails.description}
                        </li>
                    </ul>
                    <button className="btn btn-primary mt-3" onClick={handleGoBack}>
                        Go Back to Transactions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionSuccess;
