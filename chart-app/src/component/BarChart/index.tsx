import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { initialData } from 'store/slice';

export const RenderBarChart: React.FC = () => {
  return (
    <BarChart width={600} height={300} data={initialData.dataList}>
      <Bar dataKey='rate' fill='#6574d6' />
      <XAxis dataKey='name' />
      <YAxis />
    </BarChart>
  );
};
