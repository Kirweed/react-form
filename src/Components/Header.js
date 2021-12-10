import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Tab from 'Components/Tab';

const StyledWrapper = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
`;

const Header = ({ changeTabFn, activeForm }) => (
  <StyledWrapper>
    <Tab login active={activeForm === 'login'} changeTabFn={changeTabFn} />
    <Tab active={activeForm === 'register'} changeTabFn={changeTabFn} />
  </StyledWrapper>
);

Header.propTypes = {
  changeTabFn: PropTypes.func.isRequired,
  activeForm: PropTypes.oneOf(['login', 'register']).isRequired,
};

export default Header;
