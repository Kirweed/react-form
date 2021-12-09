import styled from 'styled-components';

const Button = styled.button`
  width: 40%;
  height: 50px;
  font-size: 25px;
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  margin-top: 60px;
  transition: transform ease-in-out 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default Button;
