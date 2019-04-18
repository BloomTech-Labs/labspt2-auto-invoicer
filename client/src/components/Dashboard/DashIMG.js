import React from 'react';
import dashboardImage from '../../assets/undraw_financial_data_es63.svg';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 550px;
  height: 300px;
`;

export const DashIMG = () => {
  return <StyledImage src={dashboardImage} />;
};
