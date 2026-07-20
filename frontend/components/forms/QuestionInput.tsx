
import { useState } from "react";
import { useWorkspaceStore } from "@/store/useWorkspaceStore";
import { Button } from "@/components/ui/Button";
import { api, endpoints } from "@/lib/api";

export default function QuestionInput() {
  const { question, setQuestion, setSceneGraph, setExplanation, setSteps, setLoading, isLoading } = useWorkspaceStore();
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.post(endpoints.parse, { text: question || "" });
      setSceneGraph(data.scene);
      setExplanation(data.explanation || []);
      setSteps(data.steps || []);
    } catch (err: any) {
      const message = 
        err.response?.data?.detail || 
        err.response?.data?.message || 
        err.message || 
        "Failed to parse question";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <textarea
        value={question || ""}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type or paste your math question..."
        className="min-h-[120px] w-full resize-y rounded-md border border-white/10 bg-ink px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-accent"
      />
      {error && <div className="text-sm text-red-400">{error}</div>}
      <Button onClick={submit} disabled={isLoading || !question?.trim()}>
        {isLoading ? "Solving..." : "Visualize"}
      </Button>
    </div>
  );
}
