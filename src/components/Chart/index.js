import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryAxis,
} from 'victory';

const DATE_MAP = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const Chart = ({
  data
}) => (
    <VictoryChart
      theme={VictoryTheme.material}
      width={500}
    >
      <VictoryAxis
        domain={[
          new Date().getTime() / 1000,
          new Date().getTime() / 1000 + 3600 * 24 * 5]}
        tickFormat={(val) => {
          if (val > 1) {
            const date = new Date(val * 1000);
            return `${date.getDate()}-${DATE_MAP[date.getMonth()]}`
          }
        }}
      />
      <VictoryAxis dependentAxis />
      <VictoryLine
        domain={{
          x: [
            new Date().getTime() / 1000,
            new Date().getTime() / 1000 + 3600 * 24 * 5]
        }}
        labelComponent={<VictoryTooltip />}
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" }
        }}
        data={data}
      />
    </VictoryChart>
  );

Chart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Chart;