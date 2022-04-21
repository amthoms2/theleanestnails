import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scrollUp } from 'react-scroll';
import {
  Nav,
  NavContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  Image,
  NavScroll,
  NavLink,
  // NavBtn,
  // NavBtnLink,
} from './NavbarElements';
import img from '../../media/LeanestNails-Web.png';

function Navbar({ toggleBar, displayNavMenu }) {
  const [scroll, setScroll] = useState(false);

  const toggleHome = () => {
    scrollUp.scrollToTop();
  };

  const scrollChange = () => {
    if (window.scrollY >= 80) {
      setScroll('true');
    } else {
      setScroll('false');
    }
  };

  const bars = () => {
    if (scroll === 'true') {
      return { color: 'white' };
    } else {
      return { color: 'black' };
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollChange);
  }, []);
  return (
    <>
      <Nav scroll={scroll}>
        <NavContainer>
          <Image to="/" src={img} onClick={toggleHome} />
          <IconContext.Provider value={bars()}>
            <MobileIcon onClick={toggleBar} value={bars}>
              <FaBars />
            </MobileIcon>
          </IconContext.Provider>
          <NavMenu displayMenu={displayNavMenu}>
            <NavItem>
              <NavScroll
                scroll={scroll}
                to="about"
                smooth={'true'}
                duration={500}
                spy={'true'}
                exact="true"
                offset={-80}
              >
                About
              </NavScroll>
            </NavItem>

            <NavItem>
              <NavScroll
                scroll={scroll}
                to="services"
                smooth={'true'}
                duration={500}
                spy={'true'}
                exact="true"
                offset={-80}
              >
                Services
              </NavScroll>
            </NavItem>

            <NavItem>
              <NavScroll
                scroll={scroll}
                to="gallery"
                smooth={'true'}
                duration={500}
                spy={'true'}
                exact="true"
                offset={-80}
              >
                Gallery
              </NavScroll>
            </NavItem>

            <NavItem>
              <NavLink to="/shop" scroll={scroll}>
                Shop
              </NavLink>
            </NavItem>
          </NavMenu>
          {/*
            <NavBtn displayMenu={displayNavMenu}>
              <NavBtnLink to="/signin"> Sign In</NavBtnLink>
            </NavBtn> */}
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar;
