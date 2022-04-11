import { useState } from 'react';
import Form from '../Form';
import config from './config.js';
import axios from 'axios';
import { FormContainer } from '../Form/FormElements';
import { NextButton } from './BookingElements';

const BookingForm = ({ handleClick, date, servicesList }) => {
// const BookingForm = ({ handleClick, date, servicesList }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (form) => {
    setStatus('loading');
    form = { ...form, Date: date, ServicesList: servicesList};
    try {
      // eslint-disable-next-line
      const res = await axios.post('/api/booking/book', form);
      await setTimeout(() => {
        setStatus('success');
      }, 3000);
      // console.log('res in booking', res.data);
    } catch (err) {
      setTimeout(() => {
        setStatus('error');
      }, 3000);
      console.log(err);
    }
  };

  return (
    <>
      <FormContainer>
        <NextButton>Go back</NextButton>
        {/* <NextButton onClick={handleClick}>Go back</NextButton> */}
        <Form form={config} onSubmit={handleSubmit} status={status} />
      </FormContainer>
    </>
  );
};

export default BookingForm;
