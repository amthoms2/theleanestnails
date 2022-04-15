import { useState } from 'react';
import axios from 'axios';
import { MainContainer } from '../BookingElements';
import { FormContainer } from '../../Form/FormElements';
import Form from '../../Form';
import config from './config';

const CancelBooking = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (form) => {
    setStatus('loading');
    let confirmationNumber = form['Confirmation #'];
    try {
      const findSlot = await axios.get(
        `/api/booking/find/${confirmationNumber}`
      );
      console.log('findSlot', findSlot)

      // const makeAvailable = findSlot.data.availability;
      // console.log('makeAvailable', makeAvailable)

      // const updateSlot = await axios.put(
      //   `/api/availability/true/${findSlot.data.availability}`
      // );
      // console.log('updated slot', updateSlot.data);

      const res = await axios.delete(`/api/booking/${confirmationNumber}`);
      console.log('deleted booking', res.data);

      await setTimeout(() => {
        setStatus('success');
      }, 3000);
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

export default CancelBooking;
