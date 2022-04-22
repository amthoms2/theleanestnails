import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import TimeSlot from '../../../components/Admin/Booking/NewTimeSlots';

const NewContainer = styled.div`
  width: 100%;
  display: flex;
`;
const NewWrapper = styled.div`
  flex: 6;
`;

const NewTimeSlot = () => {
  return (
    <NewContainer>
      <Sidebar />
      <NewWrapper>
        <Navbar />
        <TimeSlot />
      </NewWrapper>
    </NewContainer>
  );
}

export default NewTimeSlot;
