import React, { Component } from "react";

import './ocbc.css'

class OcbcApi extends Component {
    constructor(props) {
        super(props);
        this.state = { resData: "Response" };
    }
    render() {
        return (
            <section>
                <button className="App-button" onClick={this.fetchSaving}>
                    Saving
                </button>
                <button className="App-button" onClick={this.fetchForex}>
                    Forex
                </button>
                <button
                    className="App-button"
                    onClick={this.fetchNewCarFinancing}
                >
                    New Car Financing
                </button>

                <button className="App-button" onClick={this.fetchPayNow}>
                    PayNow
                </button>
                <pre>{this.state.resData}</pre>
            </section>
        );
    }

    ///
    fetchSaving = () => {
        fetch(
            "https://api.ocbc.com:8243/accounts/savings/1.0?country=SG&productName=Savings Account",
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer 714c3aa4999855aa6c9d17e31d22f81b",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => this.setState({ resData: JSON.stringify(data, null, 2) }))
            .catch((err) => {
                console.log(err);
                return err;
            });
    };

    fetchForex = () => {
        fetch("https://api.ocbc.com:8243/Forex/1.1", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer 714c3aa4999855aa6c9d17e31d22f81b",
            },
        })
            .then((res) => res.json())
            .then((data) => this.setState({ resData: JSON.stringify(data, null, 2) }))
            .catch((err) => {
                console.log(err);
                return err;
            });
    };

    fetchNewCarFinancing = () => {
        fetch(
            "https://api.ocbc.com:8243/loans/car/1.0?subCategory=New Car Financing",
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer 714c3aa4999855aa6c9d17e31d22f81b",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => this.setState({ resData: JSON.stringify(data, null, 2) }))
            .catch((err) => {
                console.log(err);
                return err;
            });
    };

    fetchPayNow = () => {
        let bodyData = {
            Amount: 103.2,
            ProxyType: "NRIC",
            ProxyValue: "S1234567A",
            FromAccountNo: "501999999001",
        };

        fetch(
            "https://api.ocbc.com:8243/transactional/paynow/1.0/sendPayNowMoney",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    sessionToken: "FJ2FJOYukM8wfvQizDKItfhh1dUa",
                    Authorization: "Bearer 714c3aa4999855aa6c9d17e31d22f81b",
                },
                body: JSON.stringify(bodyData),
            }
        )
            .then((res) => res.json())
            .then((data) => this.setState({ resData: JSON.stringify(data, null, 2) }))
            .catch((err) => {
                console.log(err);
                return err;
            });
    };
}

export default OcbcApi;
