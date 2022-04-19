import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 50px;
  border-bottom: 0.5px solid green;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid green;
  padding: 3px;
`;
export const Input = styled.input`
  display: flex;
  align-items: center;
  border: 0.5px solid green;
  padding: 3px;
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;
export const Counter = styled.div`
  width: 15px;
  height: 15px;
  background-color: #24d609;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -5px;
`;
export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
