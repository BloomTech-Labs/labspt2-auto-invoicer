/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 700,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    amt: 2100
  }
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={14} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class InvoicedChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/5br7g9d6/';

  render() {
    return (
      <LineChart
        width={450}
        height={230}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
      </LineChart>
    );
  }
}
