import styled, { css } from 'styled-components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const CommonStyle = css`
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
`;

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
  text-align: center;
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

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;
`;

export const Item = styled.div`
  width: 40%;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const FolderIcon = styled(DriveFolderUploadOutlinedIcon)`
  cursor: pointer;
`;
export const Input = styled.input`
 ${CommonStyle}
`;

export const TextArea = styled.textarea`
  ${CommonStyle}
`;

export const Select = styled.select`
  ${CommonStyle}
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 75px;
`;
