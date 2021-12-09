import React from 'react';
import styled from 'styled-components';
import Form from 'Components/Form';
import Header from 'Components/Header';

const StyledBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 40vw;
  height: 80vh;
  margin: 10vh auto;
  -webkit-box-shadow: 0px 0px 30px -10px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 30px -10px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 30px -10px rgba(66, 68, 90, 1);
  border-radius: 20px;
`;

const Box = () => (
  <StyledBox>
    <Header />
    <Form />
  </StyledBox>
);

export default Box;
