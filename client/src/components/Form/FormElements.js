import styled from 'styled-components';
import img from '../../media/lighting.jpg';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 70vw;
    height: 75vh;
  }
  @media only screen and (min-width: 768px) {
    width: 50vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 45vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 45vw;
    height: 80vh;
  }
`;

export const FormContainer = styled.div`
  /* background-image: url(${img}); */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

  // flex-direction: column;
  // justify-content: space-around;
  // align-items: center;
  // height: 20%;
  // width: 100%;
export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 100%;
  margin-top: 45px;
  /* width: 375px;
  margin-left: 5px; */
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 1rem;
  padding: 1rem;
  text-align: center;
  margin-bottom:5px;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
  /* display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.8rem; */
`;

export const TextArea = styled.textarea`
background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 4rem;
  padding: 1rem;
  text-align: center;
  margin-bottom:5px;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
export const SpinnerImg = styled.img`
  height: 30px;
  display: inline-block;
  margin-left: 10px;
`;

export const MessageContainer = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  ${({ status }) =>
    status === 'success'
      ? `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `
      : `
  color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}
`;

export const FormBottom = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#43e4db' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:disabled {
    background-color: #777;
  }
`;

// export const FormButton = styled.button`
//    display: inline-block;
//     font-weight: 400;
//     text-align: center;
//     white-space: nowrap;
//     vertical-align: middle;
//     user-select: none;
//     border: 1px solid transparent;
//     padding: .55rem 1.5rem;
//     font-size: 1.2rem;
//     line-height: 1.5;
//     border-radius: .25rem;
//     color: #fff;
//     background-color: #FD6413;
//     cursor: pointer;

//     &:disabled{
//       background-color: #777;
//   }

// `
