import { AdminContainer, AdminWrapper } from "../AdminElements"
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import NewImage from '../../../components/Admin/Gallery';

const NewTimeSlot = () => {
  return (
    <AdminContainer>
      <Sidebar />
      <AdminWrapper>
        <Navbar />

        <NewImage />
      </AdminWrapper>
    </AdminContainer>
  );
}

export default NewTimeSlot;
