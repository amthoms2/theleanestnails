import { AdminContainer, AdminWrapper } from '../AdminElements'
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import GalleryTable from '../../../components/Admin/DataTable/Gallery'


const New = () => {
  return (
    <AdminContainer>
      <Sidebar />
      <AdminWrapper>
        <Navbar />
        <GalleryTable />
      </AdminWrapper>
    </AdminContainer>
  );
}

export default New;
