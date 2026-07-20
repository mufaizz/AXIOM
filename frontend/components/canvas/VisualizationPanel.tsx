
import dynamic from "next/dynamic";
import { useWorkspaceStore } from "@/store/useWorkspaceStore";

const MathCanvas = dynamic(() => import("./MathCanvas"), { ssr: false });

export default function VisualizationPanel() {
  const { sceneGraph, isLoading } = useWorkspaceStore();
  return (
    <div className="relative flex h-full flex-1 bg-canvas">
      <MathCanvas />
      {!sceneGraph && !isLoading && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-slate-500">
          Ask a question or draw on the canvas to begin
        </div>
      )}
    </div>
  );
}
