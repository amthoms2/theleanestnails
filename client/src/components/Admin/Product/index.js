import { useState } from 'react';
import {
  Top,
  Left,
  EditButton,
  Title,
  Item,
  Image,
  Details,
  ItemTitle,
  ItemDetail,
  ItemKey,
  ItemValue,
  Right,
  Bottom,
} from './ProductElements';
import { useLocation } from 'react-router-dom';
import { productsRowsData } from '../../../data';
import img from '../../../media/nailflower.jpg';

import Chart from '../Chart';

const Product = () => {
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const productId = location.pathname.split('/')[3];
console.log(productId)
  const products = productsRowsData.find(prod => prod.id === productId);
  console.log(products);

  return (
    <>
      <Top>
        <Left>
          <EditButton onClick={() => setVisible(!visible)}>Edit</EditButton>
          <Title>Product</Title>
          <Item>
            <Image src={img} alt="image of product" />
            <Details>
              <ItemTitle>Nails</ItemTitle>
              <ItemDetail>
                <ItemKey>Email:</ItemKey>
                <ItemValue>janedoe@gmail.com</ItemValue>
              </ItemDetail>
              <ItemDetail>
                <ItemKey>Phone:</ItemKey>
                <ItemValue>+1 2345 67 89</ItemValue>
              </ItemDetail>
              <ItemDetail>
                <ItemKey>Address:</ItemKey>
                <ItemValue>Elton St. 234 Garden Yd. NewYork</ItemValue>
              </ItemDetail>
              <ItemDetail>
                <ItemKey>Country:</ItemKey>
                <ItemValue>USA</ItemValue>
              </ItemDetail>
            </Details>
          </Item>
        </Left>

        <Right>
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </Right>
      </Top>
      {visible === true && <Bottom>nlkgtngl gltrnglrtg ltgtg</Bottom>}
    </>
  );
};

export default Product;
