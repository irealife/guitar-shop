import React, {Dispatch, useCallback} from 'react';
import {Actions} from '../../store/action-type';
import {State} from '../../store/reducer';
import {connect, ConnectedProps} from 'react-redux';
import {changeMenuItem} from '../../store/action';
import {MenuItems} from '../../const';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import FormSearch from '../form-search/form-serach';

const mapStateToProps = ({currentMenuItem}: State) => ({
  currentMenuItem,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeMenuItemType(item: MenuItems) {
    dispatch(changeMenuItem(item));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux;

function HeaderScreen({currentMenuItem, onChangeMenuItemType}: ConnectedComponentProps): JSX.Element {

  const menuItems = Object.values(MenuItems) as MenuItems[];

  const changeMenuItemCallBack = useCallback((item) => {
    onChangeMenuItemType(item);
  }, [onChangeMenuItemType]);

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Logo />
        <Navigation menuItems={menuItems} currentMenuItem={currentMenuItem} onChangeMenuItemType={changeMenuItemCallBack} />
        <FormSearch />
        <a className="header__cart-link" href="#" aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"/>
          </svg>
          <span className="visually-hidden">Перейти в корзину</span><span className="header__cart-count">2</span>
        </a>
      </div>
    </header>
  );
}

export {HeaderScreen};
export default connector(HeaderScreen);
