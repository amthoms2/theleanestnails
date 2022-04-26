import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import ViewTimeSlot from '../../../components/Admin/Booking/TimeSlot';

const SlotContainer = styled.div`
  width: 100%;
  display: flex;
`;
const SlotWrapper = styled.div`
  flex: 6;
`;

const TimeSlot = () => {
  return (
    <SlotContainer>
      <Sidebar />
      <SlotWrapper>
        <Navbar />
        <ViewTimeSlot />
      </SlotWrapper>
    </SlotContainer>
  );
}

export default TimeSlot;
