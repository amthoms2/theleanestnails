import styled from 'styled-components';

export const SidebarContainer = styled.div`
  flex: 1.5;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
`;

export const TopContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  /* ^centers vertically */
  justify-content: center;
  /* ^centers horizontally */
`;
export const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #9dd1e6;
`;
export const CenterContainer = styled.div`
  padding-left: 10px;
`;
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ece8ff;
  }
`;

export const Title = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
  margin-bottom: 13px;
  margin-left: 5px;
`;
// export const BottomContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 10px;
// `;
