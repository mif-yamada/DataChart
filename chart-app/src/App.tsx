import React from 'react';

import './App.css';
import { RenderLineChart } from 'component/LineChart';
import { RenderBarChart } from 'component/BarChart';

function App() {
  return (
    <div className="App">
      <RenderLineChart />
      <RenderBarChart/>
    </div>
  );
}

export default App;
