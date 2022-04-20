import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import DataTable from '../../../components/Admin/Sidebar';

const ListContainer = styled.div`
  display: flex;
  width: 100%;
`;
const List = styled.div`
  flex: 6;
`;

const ProductList = () => {
  return (
    <ListContainer>
      <Sidebar />
      <List>
        <Navbar />
        <DataTable />
      </List>
    </ListContainer>
  );
};

export default ProductList;
