
import { create } from "zustand";

export type WorkspaceState = {
  question: string;
  sceneGraph: unknown | null;
  explanation: string[];
  steps: unknown[];
  isLoading: boolean;
  setQuestion: (q: string) => void;
  setSceneGraph: (s: unknown) => void;
  setExplanation: (e: string[]) => void;
  setSteps: (s: unknown[]) => void;
  setLoading: (b: boolean) => void;
  reset: () => void;
};

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  question: "",
  sceneGraph: null,
  explanation: [],
  steps: [],
  isLoading: false,
  setQuestion: (q) => set({ question: q }),
  setSceneGraph: (s) => set({ sceneGraph: s }),
  setExplanation: (e) => set({ explanation: e }),
  setSteps: (s) => set({ steps: s }),
  setLoading: (b) => set({ isLoading: b }),
  reset: () => set({ question: "", sceneGraph: null, explanation: [], steps: [], isLoading: false }),
}));
