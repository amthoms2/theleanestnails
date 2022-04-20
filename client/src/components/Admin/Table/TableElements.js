import styled from 'styled-components';

export const CellWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

export const Status = styled.div`
  padding: 5px;
  border-radius: 5px;
  color: ${({status}) => (status === 'Approved' ? 'green' : 'goldenrod')};
  background-color: ${({status}) =>
    status === 'Approved'
      ? 'rgba(0, 128, 0, 0.151)'
      : 'rgba(189, 189, 3, 0.103)'};
`;
