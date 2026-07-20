
import { useEffect, useRef } from "react";
import { Stage, Layer, Line } from "react-konva";
import { useDrawingStore } from "@/store/useDrawingStore";

export default function MathCanvas() {
  const { tool, color, strokeWidth, showGrid, zoom, layers, pushHistory } = useDrawingStore();
  const stageRef = useRef<any>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onResize = () => {
      const c = stage.container();
      stage.width(c.clientWidth);
      stage.height(c.clientHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseDown = (e: any) => {
    if (tool !== "pencil") return;
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    pushHistory([...layers, { id: crypto.randomUUID(), tool, color, width: strokeWidth, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current || tool !== "pencil") return;
    const pos = e.target.getStage().getPointerPosition();
    const next = [...layers];
    const last = next[next.length - 1] as any;
    last.points = [...last.points, pos.x, pos.y];
    pushHistory(next);
  };

  const handleMouseUp = () => { isDrawing.current = false; };

  return (
    <Stage ref={stageRef} width={800} height={600} scaleX={zoom} scaleY={zoom}
      onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <Layer>
        {showGrid && <GridLines />}
        {layers.filter((l: any) => l.tool === "pencil").map((l: any) => (
          <Line key={l.id} points={l.points} stroke={l.color} strokeWidth={l.width} lineCap="round" lineJoin="round" />
        ))}
      </Layer>
    </Stage>
  );
}

function GridLines() {
  const lines: any[] = [];
  for (let i = 0; i < 800; i += 20) {
    lines.push(<Line key={`v${i}`} points={[i, 0, i, 600]} stroke="#1e2738" strokeWidth={0.5} />);
    lines.push(<Line key={`h${i}`} points={[0, i, 800, i]} stroke="#1e2738" strokeWidth={0.5} />);
  }
  return <>{lines}</>;
}
