import styled from 'styled-components';
import { fadein } from './fadein';

export const AppContainer = styled.div`
  width: 100vw
  height: 100vh;
  min-height: 100%;

  animation: ${fadein} 1s ease;
`;

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
`;
