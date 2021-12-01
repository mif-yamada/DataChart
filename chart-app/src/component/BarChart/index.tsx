import React from 'react';
import shortid from 'shortid';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { AssetsDataProps, DataKeyTypes } from 'schema';
import { AssetsBar, AssetsBarProps } from 'component/BarChart/Bar';

interface BarChartProps {
  barStackId: string;
  width: number;
  height: number;
  chartsData: AssetsDataProps[];
  xAxisdataKey: DataKeyTypes;
  labelPosition: 'top' | 'center';
  // labelColor: string;
  assetsBarPropsList: AssetsBarProps[];
}

// グラフ
// yearが'2021年度'だけを描画すれば単一棒グラフの描画も可能？
export const AssetsBarChart: React.FC<BarChartProps> = (
  props: BarChartProps
) => {
  const {
    barStackId,
    width,
    height,
    chartsData,
    xAxisdataKey,
    labelPosition,
    // labelColor,
    assetsBarPropsList,
  } = props;
  return (
    <BarChart width={width} height={height} data={chartsData}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey={xAxisdataKey} />
      <YAxis type='number' />
      <Tooltip />
      {/* {assetsBarPropsList.map((assetsBarProps) => (
        <AssetsBar
          key={shortid.generate()}
          dataKey={assetsBarProps.dataKey}
          stackId={barStackId}
          fillColor={assetsBarProps.fillColor}
          labelPosition={labelPosition}
          labelColor={labelColor}
        />
      ))} */}
    </BarChart>
  );
};
