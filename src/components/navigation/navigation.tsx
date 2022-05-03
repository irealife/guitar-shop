import React, {MouseEvent} from 'react';
import {MenuItems} from '../../const';

type NavigationProps = {
  menuItems: MenuItems[],
  currentMenuItem: MenuItems,
  onChangeMenuItemType: (menuItem: MenuItems) => void,
}

function Navigation({menuItems, currentMenuItem, onChangeMenuItemType}: NavigationProps): JSX.Element {

  const linkMainNav = 'link main-nav__link';
  const linkMainNavCurrent = 'link--current';

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={(evt:MouseEvent<HTMLElement>) => {evt.preventDefault(); onChangeMenuItemType(item);}}
          >
            <a
              className={[linkMainNav, item === currentMenuItem ? linkMainNavCurrent : ''].join(' ')}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
