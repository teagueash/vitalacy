import React from 'react';

import {
  DashboardContainer,
  DashboardBtnContainer,
  DashboardBtn,
  DashboardGraphContainer,
  DashboardGraph,
  DashboardGraphsLeft,
  DashboardGraphsRight,
  DashboardSplash,
  DashboardSplashText,
} from '../styles/DashboardStyles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardBtnContainer>
        <DashboardBtn>7d</DashboardBtn>
        <DashboardBtn>1m</DashboardBtn>
        <DashboardBtn>3m</DashboardBtn>
        <DashboardBtn>1yr</DashboardBtn>
      </DashboardBtnContainer>
      <DashboardGraphContainer>
        <DashboardGraphsLeft>
          <DashboardGraph position={'main'} height={'786px'}>
            <DashboardSplash>
              <DashboardSplashText>welcome to your vitalacy dashboard!</DashboardSplashText>
            </DashboardSplash>
          </DashboardGraph>
          <DashboardGraph position={'left'} height={'260px'} />
          <DashboardGraph position={'right'} height={'260px'} />
        </DashboardGraphsLeft>
        <DashboardGraphsRight>
          <DashboardGraph height={'775px'} />
        </DashboardGraphsRight>
      </DashboardGraphContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
