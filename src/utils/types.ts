export interface Visualization {
  id: string;
  type: string;
  data: unknown;
  config: Record<string, unknown>;
}

export interface DataPoint {
  x: number;
  y: number;
  label?: string;
  value?: number;
}

export interface ChartConfig {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}