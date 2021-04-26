import React from 'react';
import mainStyle from '../styles/Main.module.css';
import DataTable from './DataTable';
import ChartItem from './ChartItem';

const Main = ({ dataProps }) => (
  <div className={mainStyle.grid}>
    <DataTable data-testid="DataTable" tableData={dataProps} />
    <ChartItem data-testid="ChartItem" tableData={dataProps} />
  </div>
);

export default Main;