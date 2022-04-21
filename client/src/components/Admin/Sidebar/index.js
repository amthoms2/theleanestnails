import {
  SidebarContainer,
  TopContainer,
  Logo,
  CenterContainer,
  List,
  ListItem,
  // BottomContainer,
  // Image,
  Title,
} from './SidebarElements';
import img from "../../../media/LeanestNails-Web.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import InsertChartIcon from "@mui/icons-material/InsertChart";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopContainer>
      <Link to="/admin" style={{ textDecoration: "none" }}>
        <Logo src={img} />
        </Link>
      </TopContainer>
      <hr style={{ height: '0', border: '0.5px solid green' }} />
      <CenterContainer>
        <List>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <ListItem>
            <DashboardIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Dashboard</Title>
          </ListItem>
          </Link>

          <Link to="/admin/products" style={{ textDecoration: 'none' }}>
          <ListItem>
            <StoreIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Products</Title>
          </ListItem>
          </Link>

          <ListItem>
            <CreditCardIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Transactions</Title>
          </ListItem>

          <ListItem>
            <LocalShippingIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Delivery</Title>
          </ListItem>

          <ListItem>
            <CalendarMonthIcon
              style={{ fontSize: '18px', color: '#9dd1e6' }}
            />
            <Title>Appointments</Title>
          </ListItem>

          {/* <ListItem>
            <InsertChartIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Stats</Title>
          </ListItem> */}

          <ListItem>
            <AccountCircleOutlinedIcon
              style={{ fontSize: '18px', color: '#9dd1e6' }}
            />
            <Title>Profile</Title>
          </ListItem>

          <ListItem>
            <ExitToAppIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Logout</Title>
          </ListItem>
        </List>
      </CenterContainer>

      {/* <BottomContainer>color</BottomContainer> */}
    </SidebarContainer>
  );
};

export default Sidebar;
