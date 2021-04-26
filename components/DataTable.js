import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const DataTable = ({ tableData }) => {
  const filterCurrentData = (currentData) => {
    const filterData = [];
    if(currentData)
    {
      Object.keys(currentData.current.data.TK1)
        .forEach((key) => {
          if (key.slice(0, 4) === process.env.NEXT_PUBLIC_FILTER_KEY) {
            filterData.push({ [key]: currentData.current.data.TK1[key] });
          }
        });
    }
    return filterData;
  };
  const [tableState] = useState({
    columnDef: [
      { headerName: 'Metric', field: 'times' },
      { headerNAme: 'Values', field: 'values' },
    ],
    rowData: filterCurrentData(tableData).map((el) => ({
      times: Object.keys(el)[0],
      values: Object.values(el)[0].values[Object.values(el)[0].values.length - 1] })),
  });
  return (
    <div className="ag-theme-alpine" style={{ width: 500, height: 400 }}>
      <AgGridReact
        suppressColumnVirtualisation
        columnDefs={tableState.columnDef}
        rowData={tableState.rowData}
      />
    </div>
  );
};

export default DataTable;
