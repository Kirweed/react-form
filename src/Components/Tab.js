import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledTab = styled.div`
  width: 50%;
  background-color: lightblue;
  height: 100%;
  border-bottom-left-radius: 50%;
  text-align: center;

  ${({ active, login }) =>
    active && login
      ? css`
          border-bottom: 2px solid black;
          border-right: 2px solid black;
          transform: scale(1.05);
        `
      : css`
          border-bottom: 2px solid black;
          border-left: 2px solid black;
          transform: scale(1.05);
        `}

  ${({ login }) =>
    login &&
    css`
      border-bottom-right-radius: 50%;
      border-bottom-left-radius: 0;
    `}

    ${({ active }) =>
    !active &&
    css`
      color: #383838;
      border: none;
      transform: none;
      transition: font-size ease-in-out 0.2s;

      &:hover {
        cursor: pointer;
        border-bottom: 2px solid black;
        border-left: 2px solid black;
        font-size: 1.1em;
        font-weight: 700;
        color: black;
      }

      h1 {
        font-size: 1.5em;
        font-weight: 500;
      }
    `}

    ${({ active, login }) =>
    !active &&
    login &&
    css`
      &:hover {
        border-right: 2px solid black;
        border-left: none;
      }
    `}
`;

const Tab = ({ login, changeTabFn, active }) =>
  login ? (
    <StyledTab login active={active} onClick={() => changeTabFn('login')}>
      <h1>Login</h1>
    </StyledTab>
  ) : (
    <StyledTab active={active} onClick={() => changeTabFn('register')}>
      <h1>Registration</h1>
    </StyledTab>
  );

Tab.propTypes = {
  login: PropTypes.bool,
  changeTabFn: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

Tab.defaultProps = {
  login: false,
};

export default Tab;
