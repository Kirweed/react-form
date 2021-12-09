import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 60%;
  height: 50px;
  margin: 30px 0;
  padding: 5px;
  border: none;
  border-bottom: 2px solid lightblue;
  font-size: 30px;

  &:focus {
    outline: none;
  }
`;

export default Input;
