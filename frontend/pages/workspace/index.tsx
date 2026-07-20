
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import DrawingToolbar from "@/components/canvas/DrawingToolbar";
import VisualizationPanel from "@/components/canvas/VisualizationPanel";
import QuestionInput from "@/components/forms/QuestionInput";

const ThreeScene = dynamic(() => import("@/components/three/ThreeScene"), { ssr: false });

export default function WorkspacePage() {
  return (
    <div className="flex h-screen flex-col bg-ink text-slate-200">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-80 border-r border-white/10 bg-ink-soft p-4 overflow-y-auto scrollbar-thin">
          <h2 className="mb-3 text-sm font-semibold text-white">Question</h2>
          <QuestionInput />
          <hr className="my-4 border-white/10" />
          <h2 className="mb-3 text-sm font-semibold text-white">3D Preview</h2>
          <div className="h-48 rounded-md border border-white/10"><ThreeScene /></div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 overflow-hidden">
            <DrawingToolbar />
            <VisualizationPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
