import styled from 'styled-components';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ProductListContainer = styled.div`
  height: 600px;
  padding: 20px;
  flex: 4;
  text-align: right;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductButton = styled.button`
  width: 120px;
  border: none;
  padding: 5px;
  background-color: #01bf71;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #01bf71;
  color: #fff;
  cursor: pointer;
`;

export const DeleteButton = styled(DeleteOutlineIcon)`
  cursor: pointer;
  margin-left: 10px;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
      color: green;
      font-size: 16px;
      font-weight: 400;
      border: 1px solid green;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
`

export const Title = styled.div`
   width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
