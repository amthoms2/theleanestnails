import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { animateScroll as scrollUp } from 'react-scroll';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinks,
  LinksWrapper,
  FooterItems,
  FooterH1,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  Logo,
  CopyRights,
  SocialIcon,
  SocialLink,
  StyledIcon,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scrollUp.scrollToTop();
  };

  const InstaBG =
    'linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)';

  const FaceBG =
    'linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)';

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinks>
            <LinksWrapper>
              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>
                  Home
                </FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/book">Modify Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>

              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>
                  Home
                </FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/signin">Sign In</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>
            </LinksWrapper>

            <LinksWrapper>
              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>
                  Home
                </FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/signin">Sign In</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>

              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>
                  Home
                </FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/signin">Sign In</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>
            </LinksWrapper>
          </FooterLinks>

          <SocialMedia>
            <SocialMediaWrapper>
              <Logo to="/" onClick={toggleHome}>
                Logo
              </Logo>
              <CopyRights>
                Leanest Nails © {new Date().getFullYear()} All rights reserved.
              </CopyRights>

              <SocialIcon>
                <SocialLink href="/" target="_blank" aria-label="Facebook">
                  <StyledIcon background={FaceBG}>
                    <FaFacebook />
                  </StyledIcon>
                </SocialLink>

                <SocialLink
                  href="//www.instagram.com/theleanestnails/?hl=en."
                  target="_blank"
                  aria-label="Instagram"
                >
                  <StyledIcon background={InstaBG}>
                    <FaInstagram />
                  </StyledIcon>
                </SocialLink>

                <SocialLink href="/" target="_blank" aria-label="Linkedin">
                  <StyledIcon background={'#0e76a8'}>
                    <FaLinkedin />
                  </StyledIcon>
                </SocialLink>
              </SocialIcon>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
