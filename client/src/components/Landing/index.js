import React from "react";

// import components here
import LandingText from "../LandingText";
import Button from "../reusableComponents/Button";
// import css here
import "./Landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="landing">
        <LandingText />
        <Button click={this.props.click}>Buy Now</Button>
      </div>
    );
  }
}

export default Landing;
