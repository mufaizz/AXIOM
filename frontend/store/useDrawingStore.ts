
import { create } from "zustand";

export type ToolType =
  | "select" | "pencil" | "line" | "circle" | "arc" | "rectangle" | "square"
  | "triangle" | "polygon" | "ellipse" | "compass" | "protractor"
  | "angle" | "point" | "label" | "measure" | "eraser" | "move" | "pan";

export type DrawingState = {
  tool: ToolType;
  color: string;
  strokeWidth: number;
  snapToGrid: boolean;
  showGrid: boolean;
  zoom: number;
  layers: unknown[];
  history: unknown[][];
  historyIndex: number;
  setTool: (t: ToolType) => void;
  setColor: (c: string) => void;
  toggleGrid: () => void;
  toggleSnap: (k: "snapToGrid") => void;
  setZoom: (z: number) => void;
  pushHistory: (s: unknown[]) => void;
  undo: () => void;
  redo: () => void;
};

export const useDrawingStore = create<DrawingState>((set, get) => ({
  tool: "pencil",
  color: "#6366f1",
  strokeWidth: 2,
  snapToGrid: true,
  showGrid: true,
  zoom: 1,
  layers: [],
  history: [[]],
  historyIndex: 0,
  setTool: (t) => set({ tool: t }),
  setColor: (c) => set({ color: c }),
  toggleGrid: () => set((s) => ({ showGrid: !s.showGrid })),
  toggleSnap: (k) => set((s) => ({ [k]: !s[k] } as Partial<DrawingState>)),
  setZoom: (z) => set({ zoom: Math.max(0.2, Math.min(5, z)) }),
  pushHistory: (s) => {
    const h = get().history.slice(0, get().historyIndex + 1);
    h.push([...s]);
    set({ history: h, historyIndex: h.length - 1, layers: s });
  },
  undo: () => {
    const i = Math.max(0, get().historyIndex - 1);
    set({ historyIndex: i, layers: get().history[i] });
  },
  redo: () => {
    const i = Math.min(get().history.length - 1, get().historyIndex + 1);
    set({ historyIndex: i, layers: get().history[i] });
  },
}));
