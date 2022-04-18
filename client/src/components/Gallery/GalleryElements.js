import styled from 'styled-components';

export const GalleryContainer = styled.div`
  --webkit-column-count: 3;
  --moz-column-count: 3;
  column-count: 3;
  --webkit-column-width: 33%;
  --moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

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
`;

export const Image = styled.img`
  width: 100%;
`;
