import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/apiCalls/user';
import Form from '../../Form';
import config from './config.js';
import { FormContainer } from '../../Form/FormElements';
import { MainContainer } from '../../Book/BookingElements';
// import useLocalStorageState from '../../Hooks/useLocalStorageState'

const LoginForm = () => {
  let navigate = useNavigate();
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (form) => {
    setStatus('loading');
    try {
      login(dispatch, form);

      await setTimeout(() => {
        setStatus('success');
        console.log('in success timeout');
        navigate('/admin', { replace: true });
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setStatus('error');
        navigate('/', { replace: true });
      }, 3000);
      console.log(err);
    }
  };

  return (
    <>
      <MainContainer>
        <FormContainer>
          <Form form={config} onSubmit={handleSubmit} status={status} />
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default LoginForm;
