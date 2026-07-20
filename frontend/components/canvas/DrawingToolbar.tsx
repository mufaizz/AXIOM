
import { useDrawingStore, ToolType } from "@/store/useDrawingStore";
import { cn } from "@/lib/cn";

const tools: { id: ToolType; label: string }[] = [
  { id: "pencil", label: "Pencil" },
  { id: "line", label: "Line" },
  { id: "circle", label: "Circle" },
  { id: "rectangle", label: "Rect" },
  { id: "triangle", label: "Triangle" },
  { id: "polygon", label: "Polygon" },
  { id: "eraser", label: "Eraser" },
  { id: "label", label: "Label" },
  { id: "measure", label: "Measure" },
];

export default function DrawingToolbar() {
  const { tool, setTool, color, setColor, toggleGrid, showGrid, undo, redo, setZoom, zoom } = useDrawingStore();
  return (
    <div className="flex flex-col gap-2 border-r border-white/10 bg-ink-soft p-2">
      <div className="grid grid-cols-2 gap-1">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setTool(t.id)}
            className={cn(
              "rounded px-2 py-1 text-xs",
              tool === t.id ? "bg-accent text-white" : "text-slate-300 hover:bg-white/5"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-8 w-full" />
      <button onClick={toggleGrid} className="text-xs text-slate-300 hover:text-white">
        Grid: {showGrid ? "ON" : "OFF"}
      </button>
      <div className="flex gap-1">
        <button onClick={undo} className="flex-1 rounded bg-white/5 px-2 py-1 text-xs">Undo</button>
        <button onClick={redo} className="flex-1 rounded bg-white/5 px-2 py-1 text-xs">Redo</button>
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-300">
        <button onClick={() => setZoom(zoom - 0.1)}>-</button>
        <span>{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom(zoom + 0.1)}>+</button>
      </div>
    </div >
  );
}
