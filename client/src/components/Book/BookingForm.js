import { useState } from 'react';
import Form from '../Form';
import config from './config.js';
import axios from 'axios';
import { FormContainer } from '../Form/FormElements';

const BookingForm = ({ date, servicesList, time, isAvailable }) => {
// const BookingForm = ({ handleClick, date, servicesList }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (form) => {
    setStatus('loading');
    form = { ...form, Date: date, Time: time.label, ServicesList: servicesList, AvailableId: time.value._id};
    try {
      // eslint-disable-next-line
      await axios.post('/api/booking/book', form);
      await axios.put(`/api/availability/false/${time.value._id}`)
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
      <FormContainer>
        <Form form={config} onSubmit={handleSubmit} status={status}/>
      </FormContainer>
    </>
  );
};

export default BookingForm;
