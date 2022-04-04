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
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  cursor: pointer;
`
export const LinksWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 33px;
`

export const CancelLink = styled(Link)`
  color: #43e4db;
  padding: 20px;
  /* right: 150px; */
  text-decoration: none;
  cursor: pointer;
`

export const ModifyLink = styled(Link)`
  color: #43e4db;
  padding: 20px;
  /* padding-right: 250px; */
  text-decoration: none;
  cursor: pointer;
`

export const ServiceNames = styles('div')({
  color: '#43e4db',
  position: 'absolute',
  bottom: 0,
  marginBottom: '12vh',
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  fontWeight: 500,
});
