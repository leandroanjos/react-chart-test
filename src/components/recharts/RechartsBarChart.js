import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    mes: 'Jan',
    'Loja 01': 150,
    'Loja 02': 140,
  },
  {
    mes: 'Fev',
    'Loja 01': 120,
    'Loja 02': 130,
  },
  {
    mes: 'Mar',
    'Loja 01': 135,
    'Loja 02': 120,
  },
  {
    mes: 'Abr',
    'Loja 01': 122,
    'Loja 02': 110,
  },
  {
    mes: 'Mai',
    'Loja 01': 112,
    'Loja 02': 123,
  },
  {
    mes: 'Jun',
    'Loja 01': 160,
    'Loja 02': 140,
  },
  {
    mes: 'Jul',
    'Loja 01': 142,
    'Loja 02': 132,
  },
];
class RechartsBarChart extends PureComponent {
  render() {
    return (
      <div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Loja 01" fill="#8884d8" />
          <Bar dataKey="Loja 02" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}

export default RechartsBarChart;
