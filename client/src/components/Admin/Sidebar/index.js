import {
  SidebarContainer,
  TopContainer,
  Logo,
  CenterContainer,
  List,
  ListItem,
  // BottomContainer,
  Title,
} from './SidebarElements';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopContainer>
        <Logo>logo</Logo>
      </TopContainer>
      <hr style={{ height: '0', border: '0.5px solid green' }} />
      <CenterContainer>
        <List>
          {/* <p>Main</p> */}
          <ListItem>
            <DashboardIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Dashboard</Title>
          </ListItem>

          <ListItem>
            <StoreIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Products</Title>
          </ListItem>

          <ListItem>
            <CreditCardIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Transactions</Title>
          </ListItem>

          <ListItem>
            <LocalShippingIcon style={{ fontSize: '18px', color: '#9dd1e6' }} />
            <Title>Delivery</Title>
          </ListItem>

          <ListItem>
            <NotificationsNoneIcon
              style={{ fontSize: '18px', color: '#9dd1e6' }}
            />
            <Title>Notifications</Title>
          </ListItem>

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
