import { AssetsBarProps } from 'component/BarChart/Bar';
import { AssetsTransitionProps } from 'schema';

export const AssetsTransitionData: AssetsTransitionProps = {
  AssetsDataList: [
    {
      year: '2015年度',
      A: 4000,
      B: 2400,
      C: 2400,
      D: 4000,
      E: 2400,
    },
    {
      year: '2016年度',
      A: 3000,
      B: 1398,
      C: 2210,
      D: 1398,
      E: 2210,
    },
    {
      year: '2017年度',
      A: 2000,
      B: 9800,
      C: 2290,
      D: 9800,
      E: 2290,
    },
    {
      year: '2018年度',
      A: 2780,
      B: 3908,
      C: 2780,
      D: 3908,
      E: 2000,
    },
    {
      year: '2019年度',
      A: 1890,
      B: 4800,
      C: 2181,
      D: 9800,
      E: 2290,
    },
    {
      year: '2020年度',
      A: 2390,
      B: 3800,
      C: 2500,
      D: 4000,
      E: 2400,
    },
    {
      year: '2021年度',
      A: 3490,
      B: 4300,
      C: 2100,
      D: 3908,
      E: 2000,
    },
  ],
};

export const AssetsBarPropsData: AssetsBarProps[] = [
  {
    dataKey: 'A',
    fillColor: '#6a1ce8',
  },
  {
    dataKey: 'B',
    fillColor: '#28eb55',
  },
  {
    dataKey: 'C',
    fillColor: '#26c6eb',
  },
  {
    dataKey: 'D',
    fillColor: '#dfe62c',
  },
  {
    dataKey: 'E',
    fillColor: '#ed1f6e',
  },
];
