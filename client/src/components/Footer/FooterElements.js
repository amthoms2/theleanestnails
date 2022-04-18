import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../../responsive';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.div`
  padding: 48px 244px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  ${mobile({ padding: '0px' })};
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  box-sizing: border-box;
  text-align: left;
  width: 160px;
  color: #fff;
`;

export const FooterH1 = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
//368 - 820
export const Logo = styled.img`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 16px;
  font-weight: bold;
`;

export const Image = styled.img`
cursor: pointer;
height: 13vh;
align-items: center;
/* margin-left: 24px; */
`;

export const CopyRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.div`
  display: flex;
  background: ${(props) => props.background};
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const StyledIcon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 2.8rem;
    height: 3.8rem;
  }
`;
