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
  // Logo,
  Image,
  CopyRights,
  SocialIcon,
  SocialLink,
  StyledIcon,
} from './FooterElements';
import img from "../../media/LeanestNails-Web.png"

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
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/contact">Contacts</FooterLink>

              </FooterItems>

              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/cancel">Cancel Appointment</FooterLink>
                <FooterLink to="/policies">Policies</FooterLink>
                <FooterLink to="/login">Admin</FooterLink>
              </FooterItems>
            </LinksWrapper>
          </FooterLinks>

          <SocialMedia>
            <SocialMediaWrapper>
              <Image to="/" src={img} onClick={toggleHome} />
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
