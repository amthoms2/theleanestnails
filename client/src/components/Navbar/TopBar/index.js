import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import {logout} from "../../redux/api"
import {
  TopbarContainer,
  ShutIcon,
  Icon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
  TopbarLinkRoute,
  TopBtnWrap,
  TopbarRoute,
} from './TopbarElements';

const TopBar = ({ isOpen, toggleBar }) => {
  // const user = useSelector((state) => state.user.currentUser);
  // const dispatch = useDispatch();

  // const handleClick = (evt) => {
  //   evt.preventDefault();
  //   logout(dispatch);
  // };

  return (
    <TopbarContainer isOpen={isOpen} onClick={toggleBar}>
      <Icon onClick={toggleBar}>
        <ShutIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="about" onClick={toggleBar}>
            About
          </TopbarLink>
          <TopbarLink to="services" onClick={toggleBar}>
            Services
          </TopbarLink>
          <TopbarLink to="gallery" onClick={toggleBar}>
            Gallery
          </TopbarLink>
          <TopbarLinkRoute to="shop" onClick={toggleBar}>
            Shop
          </TopbarLinkRoute>
          <TopbarLinkRoute to="book" onClick={toggleBar}>
            Book
          </TopbarLinkRoute>
        </TopbarMenu>

        <TopBtnWrap>
          {/* {user ? <TopbarRoute onClick={handleClick}>Sign Out</TopbarRoute> : <TopbarRoute to="/signin">Sign In</TopbarRoute>} */}
          <TopbarRoute to="/signin">Sign In</TopbarRoute>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default TopBar;
