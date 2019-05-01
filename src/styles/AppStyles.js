import styled from 'styled-components';
import { fadein } from './fadein';

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;

  animation: ${fadein} 1s ease;
`;
