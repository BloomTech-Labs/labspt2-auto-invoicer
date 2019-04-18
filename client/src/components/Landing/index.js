import React from 'react';

import LandingText from '../LandingText';
import { LandingCTA } from '../LandingCTA';
import { LandingFeatures } from '../LandingFeatures';
import { LandingGetStarted } from '../LandingGetStarted';

const Landing = props => {
  return (
    <React.Fragment>
      <LandingText />
      <LandingCTA />
      <LandingFeatures />
      <LandingGetStarted />
    </React.Fragment>
  );
};

export default Landing;
