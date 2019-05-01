import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const SidebarContainer = styled.div`
  width: 73px;
  margin-top: -1px;
  background-color: #2a2f4b;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  @media (max-width: 786px) {
    padding-top: 67px;
  }
`;

export const SidebarListItem = styled.li`
  flex-grow: 1;
  text-align: center;
  height: 80px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  padding: 20px 0;

  opacity: ${props => (props.active ? 1 : 0.8)}

  &:hover {
    opacity: 1;
  }
`;

export const SidebarListIcon = styled(Icon)`
  height: 33px;
  margin: 0 auto;
`;

export const SidebarListText = styled.p`
  flex-basis: 100%;
  padding-top: 2.5px;
  font-weight: bold;
`;
