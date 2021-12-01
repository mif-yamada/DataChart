import React from 'react';
import shortid from 'shortid';
import styled from '@emotion/styled';
import {
  LabelList,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import { AssetsDataProps, DataKeyTypes } from 'schema';

// Bar単体について---------------------------
export interface AssetsBarProps {
  dataKey: string;
  stackId?: string;
  fillColor: string;
}

interface AssetsBarsProps extends AssetsBarProps {
  stackId: string;
  labelPosition: 'top' | 'center';
  labelColor: string;
  onClick?: () => void;
}

const LabelStyled = styled(LabelList)`
  color: white;
`;

const AssetsBar: React.FC<AssetsBarsProps> = (
  props: AssetsBarsProps
) => {
  const { dataKey, fillColor, stackId, labelPosition, onClick } = props;
  return (
    <Bar dataKey={dataKey} stackId={stackId} fill={fillColor} onClick={onClick}>
      <LabelStyled dataKey={dataKey} position={labelPosition} />
    </Bar>
  );
};

// 棒グラフ----------------------------
interface BarChartProps {
  barStackId: string;
  width: number;
  height: number;
  chartsData: AssetsDataProps[];
  xAxisdataKey: DataKeyTypes;
  labelPosition: 'top' | 'center';
  labelColor: string;
  assetsBarPropsList: AssetsBarProps[];
}

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
    labelColor,
    assetsBarPropsList,
  } = props;
  return (
    <BarChart width={width} height={height} data={chartsData}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey={xAxisdataKey} />
      <YAxis type='number' />
      <Tooltip />
      {/* Bar一つ一つ記述すると描画される */}
      {/* <Bar>って名前のタグでないと描画反応しないのでは、と推測します。 */}
      <Bar
        dataKey={assetsBarPropsList[0].dataKey}
        stackId={barStackId}
        fill={assetsBarPropsList[0].fillColor}
      >
        <LabelStyled
          dataKey={assetsBarPropsList[0].dataKey}
          position={labelPosition}
        />
      </Bar>

      {assetsBarPropsList.map((assetsBarProps) => (
        <AssetsBar
          key={shortid.generate()}
          dataKey={assetsBarProps.dataKey}
          stackId={barStackId}
          fillColor={assetsBarProps.fillColor}
          labelPosition={labelPosition}
          labelColor={labelColor}
        />
      ))}
    </BarChart>
  );
};
