import { useState } from 'react';
import axios from 'axios';
import { MainContainer } from '../BookingElements';
import { FormContainer } from '../../Form/FormElements';
import Form from '../../Form';
import config from './config';

const ModifyBooking = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (form) => {
    setStatus('loading');
    let confirmationNumber = form['Confirmation #'];
    console.log('form here', form)
    try {
      const res = await axios.put(
        `http://localhost:8080/api/booking/${confirmationNumber}`,
        form
      );
      await setTimeout(() => {
        setStatus('success');
      }, 3000);
      console.log('res in booking', res.data);
    } catch (err) {
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
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default ModifyBooking;
