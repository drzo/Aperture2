import React, { useRef } from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { calculateChartDimensions, scaleData } from '../../utils/chartHelpers';
import { DataPoint } from '../../utils/types';

interface ChartProps {
  data: DataPoint[];
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({ data, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(containerRef);
  
  const { width, height, margin } = calculateChartDimensions(
    dimensions.width || 600,
    dimensions.height || 400
  );

  const scaledData = scaleData(data, width, height);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {scaledData.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r={5}
              className="fill-blue-500"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};