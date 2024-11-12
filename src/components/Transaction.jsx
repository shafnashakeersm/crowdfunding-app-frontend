import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Invoice from './Invoice';

const Transaction = () => {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);
    const [transactionData, setTransactionData] = useState({
        transactionId: "",
        name: "",
        place: "",
        amount:0,
        description: ""
    });

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get("http://localhost:3030/transactions");
            setTransactions(response.data);
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransactionData({ ...transactionData, [name]: value });
    };

    const createTransaction = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3030/transaction", transactionData);
            navigate('/transsuccess', {
                state: { transactionDetails: response.data.transaction }
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
                        <form onSubmit={createTransaction}>
                            <div className="row g-3 align-items-center">

                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">NAME</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={transactionData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">PLACE</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="place"
                                        value={transactionData.place}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">AMOUNT</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="amount"
                                        value={transactionData.amount}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">DESCRIPTION</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        value={transactionData.description}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="row g-3 justify-content-md-center">
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary">Pay</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <h2>Transaction Invoice</h2>
                        {transactions.map((transaction) => (
                            <Invoice key={transaction.transactionId} transaction={transaction} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
