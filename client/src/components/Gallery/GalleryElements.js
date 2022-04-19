import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const GalleryContainer = styled.div`
  --webkit-column-count: 3;
  --moz-column-count: 3;
  column-count: 3;
  --webkit-column-width: 33%;
  --moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media only screen and (max-width: 480px) {
    --webkit-column-count: 1;
    --moz-column-count: 1;
    column-count: 1;
    --webkit-column-width: 100%;
    --moz-column-width: 100%;
    column-width: 100%;
  }

  @media only screen and (max-width: 991px) {
    --webkit-column-count: 2;
    --moz-column-count: 2;
    column-count: 2;
  }
`;

export const Pictures = styled.div`
  --webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    filter: opacity(0.8);
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Model = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  transition: opacity 0.4s ease, visibility 0.4s ease,
    transform 0.5s ease-in-out;
  visibility: ${({ mod }) => (mod === 'model open' ? 'visible' : 'hidden')};
  /* visibility: hidden; */
  opacity: ${({ mod }) => (mod === 'model open' ? '1' : '0')};
  /* opacity: 0; */
  transform: ${({ mod }) => (mod === 'model open' ? '1' : '0')};
  /* transform: scale(0); */
  overflow: hidden;
  z-index: 999;
`;

export const ModelImg = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 20px 0 20px;
  margin: 0 auto;
`;

export const CloseButton = styled(CloseIcon)`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 2rem;
  height: 2rem;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  cursor: pointer;
`;
