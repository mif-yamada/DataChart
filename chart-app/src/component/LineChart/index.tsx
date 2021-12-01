import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { AssetsTransitionData } from 'SampleData/State';

export const RenderLineChart: React.FC = () => {
  return (
      <LineChart width={600} height={300} data={AssetsTransitionData.AssetsDataList}>
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='year' />
        <YAxis />
        <Line type='monotone' dataKey='A' stroke='#704ce7' />
        <Line type='monotone' dataKey='B' stroke='#f88b4c' />
      </LineChart>
  );
};
