import React from 'react';

import { MainContainer } from './styles/AppStyles';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <>
    <Header />
    <MainContainer>
      <Sidebar />
      <Dashboard />
    </MainContainer>
  </>
);

export default App;
