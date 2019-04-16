import React from 'react';

import LandingText from '../LandingText';
import { LandingCTA } from '../LandingCTA';
import { LandingFeatures } from '../LandingFeatures';
import { LandingGetStarted } from '../LandingGetStarted';

import './Landing.css';

const Landing = props => {
  return (
    <div className="landing">
      <LandingText />
      <LandingCTA />
      <LandingFeatures />
      <LandingGetStarted />
    </div>
  );
};

export default Landing;
