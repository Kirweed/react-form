import React from 'react';
import styled from 'styled-components';
import Button from 'Components/Button';
import Input from 'Components/Input';

const StyledForm = styled.form`
  display: flex;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Form = () => (
  <StyledForm>
    <Input type="text" placeholder="login" />
    <Input type="password" placeholder="password" />
    <Button type="submit">Log in</Button>
  </StyledForm>
);

export default Form;
