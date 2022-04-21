import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import BookingsTable from '../../../components/Admin/DataTable/Bookings';

const ListContainer = styled.div`
  display: flex;
  width: 100%;
`;
const List = styled.div`
  flex: 6;
`;

const BookingsList = () => {
  return (
    <ListContainer>
      <Sidebar />
      <List>
        <Navbar />
        <BookingsTable />
      </List>
    </ListContainer>
  );
};

export default BookingsList;
