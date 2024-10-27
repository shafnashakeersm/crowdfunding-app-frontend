import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionData, setTransactionData] = useState({
        transactionId: "",
        amount: 0,
        status: "",
        description: ""
    });

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const response = await axios.get("http://localhost:3030/transactions");
        setTransactions(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransactionData({ ...transactionData, [name]: value });
    };

    const createTransaction = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3030/transaction", transactionData);
            // Redirect to success page with transaction details
            history.push({
                pathname: '/transaction-success',
                state: { transactionDetails: response.data.transaction } // Assuming the response contains the transaction details
            });
        } catch (error) {
            console.error("Error creating transaction:", error);
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="transactionId" className="form-label">Transaction Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="transactionId"
                                    value={transactionData.transactionId}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="amount"
                                    value={transactionData.amount}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="status"
                                    value={transactionData.status}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    value={transactionData.description}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div class="row g-3 justify-content-md-center">
                                <div class="col-auto ">
                                    <button className="btn btn-primary" onClick={createTransaction}>Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h2>All Transactions</h2>
                <ul>
                    {transactions.map((transaction) => (
                        <li key={transaction.transactionId}>
                            ID: {transaction.transactionId}, Amount: ${transaction.amount},
                            Status: {transaction.status}, Date: {new Date(transaction.date).toLocaleDateString()}
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
}

export default Transaction;
