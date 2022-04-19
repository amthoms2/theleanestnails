import {
  WidgetContainer,
  Left,
  Title,
  Counter,
  Link,
  Right,
  Percentage,
  Icon,
} from './WidgetElements';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <Icon>
            <ShoppingCartOutlinedIcon
              style={{
                backgroundColor: 'rgba(218, 165, 32, 0.2)',
                color: 'goldenrod',
              }}
            />
          </Icon>
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <Icon>
            <MonetizationOnOutlinedIcon
              style={{
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
                color: 'green',
              }}
            />
          </Icon>
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <Icon>
            <AccountBalanceWalletOutlinedIcon
              style={{
                backgroundColor: 'rgba(128, 0, 128, 0.2)',
                color: 'purple',
              }}
            />
          </Icon>
        ),
      };
      break;
    default:
      break;
  }


  return (
    <WidgetContainer>
      <Left>
        <Title>{data.title}</Title>
        <Counter>
          {data.isMoney && '$'} {amount}
        </Counter>
        <Link>{data.link}</Link>
      </Left>

      <Right>
        <Percentage props={diff}>
          {Math.sign(diff) === 1 ? <KeyboardArrowUpIcon style={{color: "green"}}/> : <KeyboardArrowDownIcon style={{color: "red"}}/>}
          {diff} %
        </Percentage>
        {data.icon}
      </Right>
    </WidgetContainer>
  );
};

export default Widget;
