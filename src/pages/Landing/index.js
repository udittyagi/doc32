import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Input
} from '../../ui';

const LandingWrapper = styled.div`
  width: 80%;
  border: 2px solid #ff4d4d;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50vh; 
  /* margin: auto; */
  /* vertical-align: middle; */
  @media all and (min-width: 1024px) {
    width: 50%;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CustomButton = styled(Button)`
  margin-top: 40px;
`;

const Landing = () => {
  const [city, setCity] = useState('');
  const history = useHistory();

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const getForecastHandler = () => {
    if (!city) {
      window.alert('Please Fill City');
      return;
    }

    history.push({
      pathname: '/forecast',
      state: {
        city
      },
    });
  };

  return (
    <LandingWrapper>
      <InputWrapper>
        <Input
          label="Enter City"
          required
          value={city}
          onChange={cityChangeHandler}
        />
        <CustomButton onClick={getForecastHandler}>Get The Forecast</CustomButton>
      </InputWrapper>
    </LandingWrapper>
  )
};

export default Landing;
