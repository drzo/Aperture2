import React from 'react';
import { Layout } from './components/layout/Layout';
import { Chart } from './components/visualizations/Chart';

const sampleData = [
  { x: 10, y: 20, label: 'Point 1' },
  { x: 20, y: 40, label: 'Point 2' },
  { x: 30, y: 30, label: 'Point 3' },
  { x: 40, y: 60, label: 'Point 4' },
];

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Sample Visualization</h2>
          <div className="h-[400px]">
            <Chart data={sampleData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;