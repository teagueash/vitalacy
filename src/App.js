import React from 'react';

import { AppContainer, MainContainer } from './styles/AppStyles';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <AppContainer>
    <Header />
    <MainContainer>
      <Sidebar />
      <Dashboard />
    </MainContainer>
  </AppContainer>
);

export default App;
