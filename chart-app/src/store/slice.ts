import { DataProps } from 'schema';

export interface DataState {
  dataList: DataProps[];
}

export const initialData: DataState = {
  dataList: [
    {
      name: '2015年度',
      rate: 14,
      quantity: 680,
      total: 4857,
      cnt: 380,
    },
    {
      name: '2016年度',
      rate: 15.2,
      quantity: 1108,
      total: 7289,
      cnt: 460,
    },
    {
      name: '2017年度',
      rate: 14.8,
      quantity: 1200,
      total: 8108,
      cnt: 480,
    },
    {
      name: '2018年度',
      rate: 13.9,
      quantity: 1098,
      total: 7899,
      cnt: 350,
    },
    {
      name: '2019年度',
      rate: 8.68,
      quantity: 967,
      total: 11140,
      cnt: 590,
    },
    {
      name: '2020年度',
      rate: 5.9,
      quantity: 800,
      total: 13559,
      cnt: 490,
    },
  ],
};
