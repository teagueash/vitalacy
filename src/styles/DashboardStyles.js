import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 93vh;
  min-height: 850px;
  flex: 1;
  padding: 0 1em;
  background-color: #f5f5f5;

  @media (max-width: 786px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 475px) {
    margin-top: 67px;
  }
`;

export const DashboardBtnContainer = styled.div`
  text-align: right;
  margin: 0.8em 1em 0.5em 0;
`;

export const DashboardBtn = styled.button`
  width: 51px;
  height: 31px;
  border-radius: 4px;
  color: #808080;
  background-color: #fff;
  border-radius: solid 1px #e8e8e8;
  margin: 0 .25em
  cursor: pointer;
`;

export const DashboardGraphContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  @media (max-width: 786px) {
    margin-top: 2em;
  }
`;

export const DashboardGraph = styled.div`
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  margin: 1em;

  height: ${props =>
    (props.position === 'main' && '430px') ||
    (props.position === 'left' && '245px') ||
    (props.position === 'right' && '245px') ||
    (!props.position && props.height)}

  flex: ${props =>
    (props.position === 'left' && `${2} !important `) ||
    (props.position === 'right' && `${1} !important `) ||
    (props.position === 'main' && `${1} 100% !important `)};

    @media (max-width: 786px) {
      flex: 1 100% !important;
    }

`;

export const DashboardGraphsLeft = styled.div`
  flex: 5;
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1 100%;
  }

  @media (max-width: 786px) {
    flex-basis: 100%;
  }
`;

export const DashboardGraphsRight = styled.div`
  flex: 2;
`;

export const DashboardSplash = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 85%;
  height: 346px;
  text-transform: uppercase;
  background: linear-gradient(to right, #5f43d2, #2e5ee3, #007eee);
  border-radius: 32px;
  color: #fff;
  font-size: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const DashboardSplashText = styled.p`
  color: #fff;
  font-size: 3.2em;
  font-weight: bold;
  position: absolute;
  padding: 0 1em;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 786px) {
    font-size: 2em;
    padding: 0;
  }
`;
