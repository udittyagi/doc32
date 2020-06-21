import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  padding: 0 16px;
  margin: 10px 0;
`;

const Label = styled.label`
  transform-origin: left center;
  color:  ${(props) => props.theme.palette.secondary.textColor};
  font-weight: 100;
  letter-spacing: 0.01em;
  font-size: 17px;
  font-weight: 400;
  box-sizing: border-box;
  padding: 10px 15px;
  display: block;
  position: absolute;
  margin-top: -46px;
  z-index: 2;
  pointer-events: none;
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
`;

const InputField = styled.input`
  appearance: none;
  background-color: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 0;
  width: 100%;
  display: block;
  color:  ${(props) => props.theme.palette.secondary.textColor};
  letter-spacing: 0.01em;
  position: relative;
  z-index: 1;
  height: 50px;
  padding: 0px 20px;
  border: 1.8px solid;
  border-color: ${(props) => props.theme.palette.secondary.textColor};
  box-shadow: none;
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  &:focus {
    outline: none;
    background: ${(props) => {
    const color = chroma(props.theme.palette.primary.main);
    return color.alpha(0.2).css();
  }};
    color: white;
    margin-top: 30px;
  };
  &:valid {
    margin-top: 30px;
  }
  &:focus ~ ${Label} {
    transform: translate(0, -40px);
  }
  &:valid ~ ${Label} {
    text-transform: uppercase;
    font-size: 23px;
    font-style: italic;
    transform: translate(5px, -40px) scale(0.6);
  }
`;

const Input = ({
  label,
  type,
  required,
  ...props
}) => (
    <InputWrapper>
      <InputField {...props} type={type} required={required} />
      <Label>{`${label}${required ? '*' : ''}`}</Label>
    </InputWrapper>
  );

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
