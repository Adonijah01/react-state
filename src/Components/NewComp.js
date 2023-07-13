import React, { Component } from 'react';
import bellA from "./bellA.png";
import bellB from "./bellB.png";

class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "Subscribe to Kimuttech",
      sub: "Subscribe",
      imageURL: bellA
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple"
  };

  ButtonChange = () => {
    this.setState({
      Message: "Hit the bell icon to never miss an update",
      sub: "Subscribed"
    });
  };

  imageChange = () => {
    this.setState({
      imageURL: bellB,
      Message: "Thank you! Happy Learning!"
    });
  };

  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.Message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p />
        <img style={{ width: "30px", height: "30px" }} src={this.state.imageURL} onClick={this.imageChange} alt="" />
      </div>
    );
  }
}

export default NewComp;
