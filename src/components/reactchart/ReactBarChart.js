import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Loja 01',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [150, 120, 135, 122, 112, 160, 142],
    },
    {
      label: 'Loja 02',
      backgroundColor: 'rgb(120, 99, 132)',
      borderColor: 'rgb(120, 99, 132)',
      data: [140, 130, 120, 110, 123, 140, 132],
    },
  ],
};

class ReactBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }
  render() {
    return (
      <div style={{ height: 480, width: 640 }}>
        <Bar ref={this.chartReference} data={data} />
      </div>
    );
  }
}

export default ReactBarChart;
