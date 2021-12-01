export interface AssetsDataProps {
  year: string;
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
}

// export type DataKeyType = 'year' | 'A' | 'B' | 'C' | 'D' | 'E';
export type DataKeyTypes = keyof AssetsDataProps;

// export enum DataKeyTypes {year='year' , A='A' , B='B' , C='C' , D='D' , E='E'}
export interface AssetsTransitionProps {
  AssetsDataList: AssetsDataProps[];
}
