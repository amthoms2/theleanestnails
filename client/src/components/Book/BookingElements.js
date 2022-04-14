import styled from 'styled-components';
import { styled as styles } from '@mui/styles';
import { Link } from 'react-router-dom';
import img from '../../media/lighting.jpg';

export const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  /* background-size: cover; */
  backdrop-filter: blur(8.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const DataGridWrapper = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  height: 60vh;
  width: 60vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

export const NextButton = styled.p`
  color: #43e4db;
  padding: 15px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  cursor: pointer;
`;
export const LinksWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 33px;
`;

export const CancelLink = styled(Link)`
  color: #43e4db;
  padding-left: 130px;
  /* padding: 20px; */
  text-decoration: none;
  cursor: pointer;
`;

export const ModifyLink = styled(Link)`
  visibility: hidden;
  color: #43e4db;
  padding: 20px;
  /* padding-right: 250px; */
  text-decoration: none;
  cursor: pointer;
`;

export const ServiceNames = styles('div')({
  color: '#43e4db',
  position: 'absolute',
  bottom: 0,
  marginBottom: '12vh',
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  fontWeight: 500,
});

export const BookingContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  display: grid;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
  width: 100vw; */
`;

export const Other = styled.div`
/* background: rgba(255, 255, 255, 0.15); */
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  /* color: #ffffff; */
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 70vw;
    height: 75vh;
  }
  @media only screen and (min-width: 768px) {
    width: 50vw;
    height: 80vh;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
  @media only screen and (min-width: 1024px) {
    width: 45vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 45vw;
    height: 80vh;
  }
`
