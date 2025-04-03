import React from 'react';
import { Workbook } from '@fortune-sheet/react';
import '@fortune-sheet/react/dist/index.css';
import './App.css';

function App() {
  const data = [
    {
      name: "Sheet1",
      celldata: [],
      row: 100,
      column: 100,
      config: {
        rowHeightDefault: 25,
        colWidthDefault: 80,
      }
    }
  ];

  return (
    <div className="App">
      <div style={{ height: '100vh', width: '100%' }}>
        <Workbook 
          data={data}
          options={{
            showToolbar: true,
            showGrid: true,
            showFormulaBar: true,
          }}
          onChange={(sheetData) => {
            console.log('Sheet data changed:', sheetData);
          }}
        />
      </div>
    </div>
  );
}

export default App;
