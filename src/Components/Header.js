import styled from 'styled-components';
import React from 'react';
import Tab from 'Components/Tab';

const StyledWrapper = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
`;

const Header = () => (
  <StyledWrapper>
    <Tab login />
    <Tab />
  </StyledWrapper>
);

export default Header;
