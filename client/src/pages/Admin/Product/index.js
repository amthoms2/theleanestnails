import styled from 'styled-components';
import Sidebar from '../../../components/Admin/Sidebar';
import Navbar from '../../../components/Admin/Navbar';
import Product from '../../../components/Admin/Product';

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductWrapper = styled.div`
  flex: 6;
`;

const ProductPage = () => {
  return (
    <ProductContainer>
      <Sidebar />
      <ProductWrapper>
        <Navbar />
        <Product />
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductPage;
