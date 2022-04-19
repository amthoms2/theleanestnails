import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import Widget from '../../../components/Admin/Widget';
// import Featured from "../../../components/Admin";
import Chart from '../../../components/Admin/Chart';
// import Table from "../../../components/Admin";
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
`;
const HomeContainer = styled.div`
  flex: 6;
`;
const WidgetsContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;
const Charts = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  padding: 5px 20px;
`;
const ListContainer = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`;
const ListTitle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 15px;
`;

const AdminHome = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <HomeContainer>
        <Navbar />
        HOMECONTAINER
        <WidgetsContainer>
          Widget
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </WidgetsContainer>
        <Charts>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </Charts>
        <ListContainer>
          <ListTitle>Latest Transactions</ListTitle>
        </ListContainer>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default AdminHome;
