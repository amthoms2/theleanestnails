import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Form from '../../Form';
import config from './config.js';
import axios from 'axios';
import { FormContainer } from '../../Form/FormElements';
import { MainContainer } from '../../Book/BookingElements'
import useLocalStorageState from '../../Hooks/useLocalStorageState'

const LoginForm = () => {
  let navigate = useNavigate();
  const [status, setStatus] = useState('');
  // eslint-disable-next-line
  const [_, setAdmin] = useLocalStorageState("user", "");

  const handleSubmit = async (form) => {
    setStatus('loading');
    try {
     const res = await axios.post('/api/auth/admin/login', form);
      // if(res.data.accessToken){
        // window.localStorage.setItem("user", JSON.stringify(res.data));
      // }
      setAdmin(JSON.stringify(res.data))
      await setTimeout(() => {
        setStatus('success');
        navigate("/admin", { replace: true });
        window.location.reload()
      }, 2000);
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
          <Form form={config} onSubmit={handleSubmit} status={status} />
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default LoginForm;
