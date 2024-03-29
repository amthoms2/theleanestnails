import styled, { css } from 'styled-components';

const TopBottom = css`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  margin: 20px;
  display: flex;
`;

export const Top = styled.div`
  ${TopBottom}
`;

export const H1 = styled.h1`
  color: lightgray;
  font-size: 20px;
`;

export const Bottom = styled.div`
  ${TopBottom}
`;

export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 2;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  position: relative;
`;

export const List = styled.ul``;

export const Button = styled.button`
  text-decoration: none;
  color: green;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid green;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 0;
`;
