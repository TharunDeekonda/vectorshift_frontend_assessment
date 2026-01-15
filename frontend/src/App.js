import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { submitPipeline } from "./submit";
import { useStore } from "./store";


function App() {
  const { nodes, edges } = useStore((state) => ({
  nodes: state.nodes,
  edges: state.edges,
  }));

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <button
  onClick={() => submitPipeline(nodes, edges)}
  style={{
    marginTop: "10px",
    padding: "8px 12px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Submit
</button>

    </div>
  );
}

export default App;
