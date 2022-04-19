import {
  NavbarContainer,
  NavbarWrapper,
  Search,
  Input,
  Items,
  Item,
  Image,
  Counter,
} from './NavbarElements';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import img from '../../../media/leanas.jpg';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Search>
          <Input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </Search>

        <Items>
          <Item>
            <FullscreenExitOutlinedIcon style={{ fontSize: '20px' }} />
          </Item>

          <Item>
            <NotificationsNoneOutlinedIcon style={{ fontSize: '20px' }} />
            <Counter>1</Counter>
          </Item>

          <Item>
            <ChatBubbleOutlineOutlinedIcon style={{ fontSize: '20px' }} />
            <Counter>2</Counter>
          </Item>

          <Item>
            <ListOutlinedIcon style={{ fontSize: '20px' }} />
          </Item>

          <Item>
            <Image src={img} alt="girl" />
          </Item>
        </Items>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
