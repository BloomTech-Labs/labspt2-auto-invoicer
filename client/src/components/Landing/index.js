import React from "react";

//import LandingText from "../LandingText";
import LandingCTA from "../LandingText/LandingCTA.js";
import { LandingFeatures } from "../LandingFeatures";
import { LandingGetStarted } from "../LandingGetStarted";

import HeadlineText from "../LandingText/HeadlineText";

const Landing = props => {
  return (
    <React.Fragment>
      <HeadlineText />
      <LandingCTA />
      <LandingFeatures />
      <LandingGetStarted />
    </React.Fragment>
  );
};

export default Landing;
