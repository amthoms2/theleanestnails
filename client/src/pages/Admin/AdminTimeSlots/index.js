import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import SlotsTable from '../../../components/Admin/DataTable/TimeSlots';

const ListContainer = styled.div`
  display: flex;
  width: 100%;
`;
const List = styled.div`
  flex: 6;
`;

const TimeSlots = () => {
  return (
    <ListContainer>
      <Sidebar />
      <List>
        <Navbar />
        <SlotsTable />
      </List>
    </ListContainer>
  );
};

export default TimeSlots;
