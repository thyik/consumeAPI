import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Demo on Consuming Open Api</p>
            </header>
            <section>
                <button className="App-button" onClick={fetchSaving}>
                    Saving
                </button>
                <button className="App-button" onClick={fetchForex}>
                    Forex
                </button>
                <button className="App-button" onClick={fetchNewCarFinancing}>
                    New Car Financing
                </button>

                <button className="App-button" onClick={fetchPayNow}>
                    PayNow
                </button>
                <p id="response">Response</p>
            </section>
            <footer>Copyright &copy; Yik Teng Hie</footer>
        </div>
    );
}

function fetchSaving() {
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
        .then(
            (data) =>
                (document.getElementById("response").innerText = JSON.stringify(
                    data
                ))
        )
        .catch((err) => {
            console.log(err);
            return err;
        });
}

function fetchForex() {
    fetch("https://api.ocbc.com:8243/Forex/1.1", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer 714c3aa4999855aa6c9d17e31d22f81b",
        },
    })
        .then((res) => res.json())
        .then(
            (data) =>
                (document.getElementById("response").innerText = JSON.stringify(
                    data
                ))
        )
        .catch((err) => {
            console.log(err);
            return err;
        });
}

function fetchNewCarFinancing() {
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
        .then(
            (data) =>
                (document.getElementById("response").innerText = JSON.stringify(
                    data
                ))
        )
        .catch((err) => {
            console.log(err);
            return err;
        });
}

function fetchPayNow() {

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
        .then(
            (data) =>
                (document.getElementById("response").innerText = JSON.stringify(
                    data
                ))
        )
        .catch((err) => {
            console.log(err);
            return err;
        });
}

export default App;
