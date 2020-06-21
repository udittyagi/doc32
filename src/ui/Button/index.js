import styled from 'styled-components';

const Button = styled.button`
  width: 80%;
  margin: auto;
  display: block;
  height: 35px;
  background: ${props => props.theme.palette.button.main};
  background: ${props => props.theme.palette.button.secondaryGradient};
  color: ${props => props.theme.palette.primary.textColor};
  font-size: 1.2rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;