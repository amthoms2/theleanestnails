import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import NewProduct from '../../../components/Admin/Product/NewProduct';

const NewContainer = styled.div`
  width: 100%;
  display: flex;
`;
const NewWrapper = styled.div`
  flex: 6;
`;

function New() {
  return (
    <NewContainer>
      <Sidebar />
      <NewWrapper>
        <Navbar />
        <NewProduct />
      </NewWrapper>
    </NewContainer>
  );
}

export default New;
