import React from 'react';
import { Bar, LabelList } from 'recharts';
import styled from '@emotion/styled';
import { DataKeyTypes } from 'schema';

export interface AssetsBarProps {
  dataKey: string;
  stackId?: string;
  fillColor: string;
}

interface AssetsBarsProps extends AssetsBarProps {
  stackId: string;
  labelPosition: 'top' | 'center';
  // labelColor: string;
  onClick?: () => void;
}

// Barの要素を返す子コンポーネント（このAssetsBar）を親コンポーネント（App.tsx）で呼び出すと描画されない
export const AssetsBar: React.FC= () => {
  // const { dataKey,stackId, fillColor} = props;
  return <Bar dataKey='A' stackId='test' fill='#6a1ce8' />;
  };


  // const LabelStyled = styled(LabelList)`
  // color: white;
  // `;
// export const AssetsBar: React.FC<AssetsBarsProps> = (props: AssetsBarsProps) => {
//   const { dataKey, fillColor, stackId, labelPosition, onClick } = props;
//   return (
//     <Bar dataKey={dataKey} stackId={stackId} fill={fillColor} onClick={onClick}>
//       <LabelStyled dataKey={dataKey} position={labelPosition} />
//     </Bar>
//   );
// };
