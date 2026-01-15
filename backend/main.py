from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: list
    edges: list

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = {n["id"]: [] for n in pipeline.nodes}

    for e in pipeline.edges:
        if e["source"] in graph:
            graph[e["source"]].append(e["target"])

    visited = set()
    stack = set()

    def has_cycle(node):
        visited.add(node)
        stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if has_cycle(neighbor):
                    return True
            elif neighbor in stack:
                return True

        stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if node not in visited:
            if has_cycle(node):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
