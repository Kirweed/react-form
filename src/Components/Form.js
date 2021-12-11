import React from 'react';
import PropTypes from 'prop-types';
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

const Form = ({ type }) => (
  <StyledForm>
    {type === 'login' ? (
      <>
        <Input type="text" placeholder="login" />
        <Input type="password" placeholder="password" />
        <Button type="submit">Log in</Button>
      </>
    ) : (
      <>
        <Input type="text" placeholder="login" />
        <Input type="text" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="repeat password" />
        <Button type="submit">Register</Button>
      </>
    )}
  </StyledForm>
);

Form.propTypes = {
  type: PropTypes.oneOf(['login', 'register']).isRequired,
};

export default Form;
