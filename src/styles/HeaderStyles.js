import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 63px;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  display: flex;

  @media (max-width: 786px) {
    position: fixed;
    text-align: center;
    z-index: 5;
  }
`;

export const HeaderLogoContainer = styled.div`
  width: 73px;
  background-color: #527cf0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 31px;
  height: 46px;
`;

export const HeaderTextContainer = styled.div`
  width: calc(100% - 81px);
`;

export const HeaderText = styled.p`
  color: #808080;
  margin-left: 30px;
  font-size: 2em;
  font-weight: lighter;
  line-height: 66px;

  @media (max-width: 786px) {
    margin-left: 0;
  }
`;
