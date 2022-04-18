import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  Image,
  NavScroll,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import img from "../../media/LeanestNails-Web.png"

function Navbar({ toggleBar, displayNavMenu }) {
  const [scroll, setScroll] = useState(false);

  const scrollChange = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollChange);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scroll={scroll}>
          <NavContainer>
            <Image src={img} />
            <Logo to="/">Logo</Logo>
            <MobileIcon onClick={toggleBar}>
              <FaBars />
            </MobileIcon>

            <NavMenu displayMenu={displayNavMenu}>
              <NavItem>
                <NavScroll
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
                <NavLink to="/shop">Shop</NavLink>
              </NavItem>
            </NavMenu>

            <NavBtn displayMenu={displayNavMenu}>
              <NavBtnLink to="/signin"> Sign In</NavBtnLink>
            </NavBtn>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
