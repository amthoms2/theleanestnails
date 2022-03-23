import { useState } from 'react';
import Form from '../Form';
import config from './config.js';
import axios from 'axios';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';

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

  const NextButton = styled(Button)({
    color: '#43e4db',
  });

  return (
    <>
      {/* <NextButton onClick={handleClick}>Go back</NextButton> */}
      <Form form={config} onSubmit={handleSubmit} status={status} />
    </>
  );
};

export default BookingForm;
