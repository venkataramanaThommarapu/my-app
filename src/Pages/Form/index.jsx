import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailError('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Email is invalid.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setPasswordError('Password is required.');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError('Password must contain at least one uppercase letter.');
    } else if (!/[a-z]/.test(value)) {
      setPasswordError('Password must contain at least one lowercase letter.');
    } else if (!/\d/.test(value)) {
      setPasswordError('Password must contain at least one number.');
    } else if (!/\W/.test(value)) {
      setPasswordError('Password must contain at least one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required.');
    }
    if (!password) {
      setPasswordError('Password is required.');
    }
    if (!emailError && !passwordError) {
    }
  };




  return (
    <Container>
        <div className='new'>
            <h1 className='text-danger'>Login page Validations</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  value={email} onChange={handleEmailChange} isInvalid={!!emailError} placeholder={"Enter email"} />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password" className='mt-4'>
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" value={password} onChange={handlePasswordChange} isInvalid={!!passwordError} placeholder={"Enter Password"}/>
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className=' btn mt-5 d-flex ms-auto' disabled={!!emailError || !!passwordError}>
        Login
      </Button>
    </Form>
    </div>
    </Container>
  );
};

export default LoginForm;

