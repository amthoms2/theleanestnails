import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import New from '../../../components/Admin/Booking/NewBooking';

const NewContainer = styled.div`
  width: 100%;
  display: flex;
`;
const NewWrapper = styled.div`
  flex: 6;
`;

const NewBooking = () => {
  return (
    <NewContainer>
      <Sidebar />
      <NewWrapper>
        <Navbar />
        <New />
      </NewWrapper>
    </NewContainer>
  );
}

export default NewBooking;
