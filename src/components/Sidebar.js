import React, { useState } from 'react';
import {
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  SidebarListIcon,
  SidebarListText,
} from '../styles/SidebarStyles';

const menuItems = [
  {
    name: 'home',
    text: 'Home',
  },
  {
    name: 'users',
    text: 'Groups',
  },
  {
    name: 'user',
    text: 'Users',
  },
  {
    name: 'chart line',
    text: 'Reports',
  },
];

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function toggleActive(index) {
    setActiveIndex(index);
  }
  return (
    <SidebarContainer>
      <SidebarList>
        {menuItems.map((data, index) => {
          const active = activeIndex === index;

          return (
            <SidebarListItem onClick={() => toggleActive(index)} active={active} key={data.name}>
              <SidebarListIcon style={{ margin: '0 auto' }} size="big" name={data.name} />
              <SidebarListText>{data.text}</SidebarListText>
            </SidebarListItem>
          );
        })}
      </SidebarList>
    </SidebarContainer>
  );
};
