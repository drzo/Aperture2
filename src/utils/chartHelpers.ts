import { ChartConfig, DataPoint } from './types';

export const calculateChartDimensions = (
  containerWidth: number,
  containerHeight: number,
  aspectRatio = 16 / 9
): ChartConfig => {
  const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40,
  };

  const width = containerWidth - margin.left - margin.right;
  const height = Math.min(
    containerHeight - margin.top - margin.bottom,
    width / aspectRatio
  );

  return {
    width,
    height,
    margin,
  };
};

export const scaleData = (
  data: DataPoint[],
  width: number,
  height: number
): DataPoint[] => {
  if (data.length === 0) return [];

  const xValues = data.map((d) => d.x);
  const yValues = data.map((d) => d.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  return data.map((point) => ({
    ...point,
    x: ((point.x - xMin) / (xMax - xMin)) * width,
    y: ((point.y - yMin) / (yMax - yMin)) * height,
  }));
};