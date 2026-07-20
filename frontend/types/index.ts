
export type Vec2 = { x: number; y: number };

export type SceneObject = {
  id: string;
  type: string;
  params: Record<string, unknown>;
  label?: string;
  color?: string;
  visible?: boolean;
  locked?: boolean;
};

export type SceneRelation = {
  id: string;
  type: string;
  from: string;
  to: string;
  params?: Record<string, unknown>;
};

export type SceneGraph = {
  id: string;
  objects: SceneObject[];
  relations: SceneRelation[];
  labels: Record<string, string>;
  variables: Record<string, number | string>;
  constraints: string[];
  animations: unknown[];
  camera?: { x: number; y: number; z: number; zoom: number };
  lighting?: { ambient: number; directional: number };
  highlightPaths?: string[][];
};

export type StepExplanation = {
  index: number;
  title: string;
  description: string;
  latex?: string;
  animationId?: string;
};

export type SolveResult = {
  steps: StepExplanation[];
  finalAnswer: string;
  confidence: number;
  misconceptions?: string[];
};

export type DrawingAction = {
  id: string;
  tool: string;
  points: Vec2[];
  color: string;
  width: number;
  timestamp: number;
};
