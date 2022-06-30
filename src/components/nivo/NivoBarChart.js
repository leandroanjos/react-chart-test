import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

/*
  {
    country: 'AD',
    'hot dog': 81,
    'hot dogColor': 'hsl(154, 70%, 50%)',
    burger: 193,
    burgerColor: 'hsl(304, 70%, 50%)',
    sandwich: 50,
    sandwichColor: 'hsl(222, 70%, 50%)',
    kebab: 154,
    kebabColor: 'hsl(241, 70%, 50%)',
    fries: 68,
    friesColor: 'hsl(331, 70%, 50%)',
    donut: 49,
    donutColor: 'hsl(259, 70%, 50%)',
  },*/

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

const legends = [
  {
    dataFrom: 'keys',
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [
      {
        on: 'hover',
        style: {
          itemOpacity: 1,
        },
      },
    ],
  },
];

const NivoBarChart = () => {
  return (
    <div style={{ height: 480, width: 640 }}>
      <ResponsiveBar
        data={data}
        keys={['Loja 01', 'Loja 02']}
        indexBy="mes"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={legends}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default NivoBarChart;
