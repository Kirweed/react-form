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

class Box extends React.Component {
  state = {
    activeForm: 'login',
  };

  changeForm = (type) => {
    if (type !== this.state.activeForm) {
      this.setState({ activeForm: type });
    }
  };

  render() {
    return (
      <StyledBox>
        <Header
          activeForm={this.state.activeForm}
          changeTabFn={this.changeForm}
        />
        <Form type={this.state.activeForm} />
      </StyledBox>
    );
  }
}

export default Box;
