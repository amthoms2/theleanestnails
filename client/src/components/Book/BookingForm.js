import { useState } from 'react';
import Form from '../Form';
import config from './config.js';
import axios from 'axios';
import { FormContainer } from '../Form/FormElements';
import { NextButton } from './BookingElements';

const BookingForm = ({ handleClick, date, servicesList }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (form) => {
    setStatus('loading');
    form = { ...form, Date: date };
    try {
      const res = await axios.post(
        'http://localhost:8080/api/booking/book',
        form
      );

    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      setStatus('success');
    }, 3000);
  };


  return (
    <>
    <FormContainer>
      <NextButton onClick={handleClick}>Go back</NextButton>
      <Form form={config} onSubmit={handleSubmit} status={status} />
      </FormContainer>
    </>
  );
};

export default BookingForm;
