import React, { Component } from "react";

class Callback extends Component {
    constructor(props) {
        super(props);
        this.state = { access_token: "" };
    }

    componentDidMount() {
        console.log("Callback initiated");
        // callback uri format
        // http://localhost:3000/callback#access_token=3f86faa0f22934789b71b79ac39ec34f&token_type=Bearer&expires_in=3600
        // sample test from ocbc
        // https://oauth.pstmn.io/v1/callback?code=267072bd47d48b8c3270c45caecbe031
        const parsedHash = new URLSearchParams(
            window.location.hash.substr(1) // skip the first char (#)
        );
        this.setState({ access_token: parsedHash.get("access_token") });
    }

    render() {
        return (
            <div>
                Callback received
                <h1>Access Token</h1>
                <p>{this.state.access_token}</p>
            </div>
        );
    }
}

export default Callback;
