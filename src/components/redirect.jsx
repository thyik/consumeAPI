import React, { Component } from "react";

class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentDidMount(){
    //console.log(this.state);
    window.location = this.state.loc;
  }
  render(){
    return (<div><section>Redirecting...</section></div>);
  }
}

export default Redirect;

// put this to routing section
{/* <Route
  path="/privacy-policy"
  component={ Redirect }
  loc="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
  /> */}