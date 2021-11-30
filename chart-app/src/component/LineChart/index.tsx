import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { initialData } from 'store/slice';

export const RenderLineChart: React.FC = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={initialData.dataList}>
        <Line type='monotone' dataKey='total' stroke='#e39c73' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
    </div>
  );
};
