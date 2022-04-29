import { useState } from 'react';
import axios from 'axios';
import Form from '../Form';
import config from './config';
import { MainContainer } from '../Book/BookingElements';
import { FormContainer } from '../Form/FormElements';
// import { SocialLink } from '../../components/Footer/FooterElements';
// import { FaInstagram } from 'react-icons/fa';
// import styled from 'styled-components';

// const StyledIcon = styled.div`
//   height: 3.5rem;
//   width: 3.5rem;
//   background: ${(props) => props.background};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 4rem;
//   color: white;
//   cursor: pointer;
//   svg {
//     width: 11.5rem;
//     height: 2.2rem;
//   }
// `;

const Contact = () => {
  const [status, setStatus] = useState('');
  // const [status, setStatus] = useState('Submit');
  // const [inputs, setInputs] = useState({});

  // const handleChange = (evt) => {
  //   setInputs((prev) => {
  //     return { ...prev, [evt.target.name]: evt.target.value };
  //   });
  // };

  // const InstaBG =
  //   'linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)';

  const handleSubmit = async (form) => {
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      // console.log('res contact', res.data);
      await setTimeout(() => {
        setStatus('success');
      }, 3000);
    } catch (err) {
      console.log('error here')
      setTimeout(() => {
        setStatus('error');
      }, 3000);
      console.log(err);
    }
  };

  return (
    <>
      <MainContainer>
        <FormContainer>
          <Form form={config} onSubmit={handleSubmit} status={status}></Form>
          {/* <SocialLink style={{bottom: '0px'}}
          href="//www.instagram.com/theleanestnails/?hl=en."
          target="_blank"
          aria-label="Instagram"
        >
          <StyledIcon background={InstaBG}>
            <FaInstagram />
          </StyledIcon>
        </SocialLink> */}
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default Contact;
