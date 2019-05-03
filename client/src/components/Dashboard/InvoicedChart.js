/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const CustomizedLabel = props => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={14} textAnchor="middle">
      {value}
    </text>
  );
};

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
          fontSize={15}
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class InvoicedChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/5br7g9d6/';
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.invoices) !== JSON.stringify(this.props.invoices)
    ) {
      const mappedInvoices = [];
      let invoicedJanuary = 0;
      let invoicedFebruary = 0;
      let invoicedMarch = 0;
      let invoicedApril = 0;
      let invoicedMay = 0;
      let invoicedJune = 0;
      let invoicedJuly = 0;
      let invoicedAugust = 0;
      let invoicedSeptember = 0;
      let invoicedOctober = 0;
      let invoicedNovember = 0;
      let invoicedDecember = 0;
      this.props.invoices.map(invoice => {
        if (invoice.date.includes('Jan')) {
          invoicedJanuary += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Feb')) {
          invoicedFebruary += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Mar')) {
          invoicedMarch += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Apr')) {
          invoicedApril += parseFloat(invoice.total);
        }
        if (invoice.date.includes('May')) {
          invoicedMay += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Jun')) {
          invoicedJune += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Jul')) {
          invoicedJuly += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Aug')) {
          invoicedAugust += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Sep')) {
          invoicedSeptember += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Oct')) {
          invoicedOctober += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Nov')) {
          invoicedNovember += parseFloat(invoice.total);
        }
        if (invoice.date.includes('Dec')) {
          invoicedDecember += parseFloat(invoice.total);
        }
        return invoice;
      });

      mappedInvoices.push(
        { name: 'Jan', invoiced: invoicedJanuary },
        { name: 'Feb', invoiced: invoicedFebruary },
        { name: 'Mar', invoiced: invoicedMarch },
        { name: 'Apr', invoiced: invoicedApril },
        { name: 'May', invoiced: invoicedMay },
        { name: 'Jun', invoiced: invoicedJune },
        { name: 'Jul', invoiced: invoicedJuly },
        { name: 'Aug', invoiced: invoicedAugust },
        { name: 'Sep', invoiced: invoicedSeptember },
        { name: 'Oct', invoiced: invoicedOctober },
        { name: 'Nov', invoiced: invoicedNovember },
        { name: 'Dec', invoiced: invoicedDecember }
      );
      this.setState({
        data: [...mappedInvoices]
      });
    }
  }
  render() {
    return (
      <div style={{ width: '100%', height: 270 }}>
        <ResponsiveContainer>
          <LineChart
            width={700}
            height={240}
            data={this.state.data}
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
              dataKey="invoiced"
              stroke="#8884d8"
              label={<CustomizedLabel />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
