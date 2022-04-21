import { useState } from 'react';
import {
  Top,
  Left,
  EditButton,
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

import Chart from '../Chart';

const Product = () => {
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const productId = location.pathname.split('/')[3];
  // eslint-disable-next-line
  const product = productsRowsData.find((product) => (product.id == productId));

  return (
    <>
      <Top>
        <Left>
          <EditButton onClick={() => setVisible(!visible)}>Edit</EditButton>
          {/* <Title>Product</Title> */}
          <Item>
            <Image src={product.img} alt="image of product" />
            <Details>
              <ItemTitle>{product.title}</ItemTitle>
              <ItemDetail>
                <ItemKey>Description:</ItemKey>
                <ItemValue>{product.description}</ItemValue>
              </ItemDetail>
              <ItemDetail>
                <ItemKey>In Stock:</ItemKey>
                <ItemValue>{product.inStock}</ItemValue>
              </ItemDetail>
              <ItemDetail>
                <ItemKey>Quantity:</ItemKey>
                <ItemValue>{product.quantity}</ItemValue>
              </ItemDetail>
              <ItemDetail>
                <ItemKey>Price:</ItemKey>
                <ItemValue>${product.price}</ItemValue>
              </ItemDetail>
            </Details>
          </Item>
        </Left>

        <Right>
          <Chart aspect={2.5 / 1} title="Product Analytics ( Last 6 Months)" />
        </Right>
      </Top>
      {visible === true && <Bottom>Edit Form</Bottom>}
    </>
  );
};

export default Product;
