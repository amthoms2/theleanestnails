import styled from 'styled-components';

export const Top = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;
export const Left = styled.div`
  flex: 1;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  position: relative;
`;
export const EditButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
  color: #7451f8;
  background-color: #7551f818;
  cursor: pointer;
  border-radius: 0px 0px 0px 5px;
`;

export const Title = styled.h1``;

export const Item = styled.div`
  display: flex;
  gap: 20px;
`;
export const Details = styled.div``;

export const ItemTitle = styled.h1`
  margin-bottom: 10px;
  color: #555;
`;
export const ItemDetail = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;
export const ItemKey = styled.span`
  font-weight: bold;
  color: gray;
  margin-right: 5px;
`;
export const ItemValue = styled.span`
  font-weight: 300;
`;

export const Right = styled.div`
  flex: 2;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Bottom = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 10px 20px;

  /* display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around; */

  /* @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  } */
  @media only screen and (min-width: 320px) {
    width: 70vw;
    height: 90vh;
    hr{
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
`;
