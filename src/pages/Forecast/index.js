import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Chart from '../../components/Chart';

const FORECAST_API = 'https://api.openweathermap.org/data/2.5/forecast';

const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

const ChartList = styled.div`
  width: 90%;
  @media all and (min-width: 1024px) {
    width: 40%;
  }
`;

const Title = styled.h4`
  text-align: center;
  font-weight: lighter;
  color: ${props => props.theme.palette.secondary.textColor}
`;

const Forecast = () => {
  const [tempData, setTemp] = useState([]);
  const [humidityData, setHumidity] = useState([]);
  const [pressrData, setPressr] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!location.state || !location.state.city) {
      history.replace('/');
    } else {
      const city = location.state.city;
      fetch(`${FORECAST_API}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(res => {
          const tempArr = [];
          const humidArr = [];
          const pressrArr = [];

          res.list.forEach(item => {
            const data = {
              x: item.dt,
              y: item.main.temp,
            };
            tempArr.push({ ...data });
            data.y = item.main.humidity;
            humidArr.push({ ...data });
            data.y = item.main.pressure;
            pressrArr.push({ ...data });
          });

          setTemp(tempArr);
          setHumidity(humidArr);
          setPressr(pressrArr);
        }).catch(err => console.error(err));
    }
  }, [location, history]);

  return (
    <ChartWrapper>
      <ChartList>
        <Title>Temperature</Title>
        <Chart data={tempData} />
      </ChartList>
      <ChartList>
        <Title>Humidity</Title>
        <Chart data={humidityData} />
      </ChartList>
      <ChartList>
        <Title>Pressure</Title>
        <Chart data={pressrData} />
      </ChartList>
    </ChartWrapper>
  )
}

export default Forecast;
