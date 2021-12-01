import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './App.css';

import { AssetsBarChart } from 'component/BarChart';
import { AssetsBarPropsData, AssetsTransitionData } from 'SampleData/State';
import { RenderLineChart } from 'component/LineChart';
import { AssetsBar } from 'component/BarChart/Bar';

// Barの描画
// RenderLineChart の描画は成功。
// BarをAtomにするのは無理？
const App: React.FC = () => {
  return (
    <div className='App'>
      <RenderLineChart />
      <BarChart
        width={600}
        height={300}
        data={AssetsTransitionData.AssetsDataList}
      >
        <XAxis dataKey={'year'} />
        <YAxis />
        <Tooltip />
        <AssetsBar
          // dataKey='A'
          // stackId='test'
          // fillColor='#6a1ce8'
        />
        <Bar dataKey='B' stackId='test' fill={'#28eb55'} />
        <Bar dataKey='C' stackId='test' />
        <Bar dataKey='D' stackId='test' />
        <Bar dataKey='E' stackId='test' />
      </BarChart>

      <AssetsBarChart
        barStackId={'oneYears'}
        width={600}
        height={300}
        chartsData={AssetsTransitionData.AssetsDataList}
        xAxisdataKey={'year'}
        labelPosition={'center'}
        // labelColor={'#e4f2f7'}
        assetsBarPropsList={AssetsBarPropsData}
      />
    </div>
  );
};

export default App;
