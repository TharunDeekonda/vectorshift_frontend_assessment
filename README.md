# VectorShift Frontend Technical Assessment

This project implements a node-based pipeline editor inspired by VectorShift’s workflow builder. The application allows users to create pipelines using draggable nodes, connect them via directed edges, and validate the pipeline structure using a backend service.

---

## 🚀 Features Implemented

### Node Abstraction
- Created a reusable `BaseNode` component
- All nodes (Input, Output, LLM, Text, and additional demo nodes) share common structure and styling
- Easy to add new node types with minimal code

### Multiple Node Types
- Input Node
- Text Node
- LLM Node
- Output Node
- Additional demo nodes to showcase abstraction flexibility

### Text Node Enhancements
- Auto-resizing text area based on content
- Dynamic variable parsing using `{{variable}}` syntax
- Each variable creates a corresponding input handle dynamically

### Styling
- Clean, consistent dark-themed UI
- Unified node appearance with headers and content sections

### Backend Integration
- FastAPI backend integration
- Frontend submits pipeline nodes and edges to backend
- Backend calculates:
  - Number of nodes
  - Number of edges
  - Whether the pipeline is a Directed Acyclic Graph (DAG)

### DAG Validation
- Backend performs cycle detection using graph traversal
- Result displayed to the user via alert on submission

---

## 🧪 How to Run the Project

### Frontend
```bash
cd frontend
npm install
npm start


## 📸 Screenshots

### Pipeline Builder
![Pipeline Builder](<img width="1920" height="1080" alt="Screenshot 2026-01-15 141724" src="https://github.com/user-attachments/assets/c3df2bf4-d9eb-4e7f-b977-886b9f90c6c3" />
)

### Backend Validation Result
![Submit Result](<img width="1920" height="1080" alt="Screenshot 2026-01-15 142159" src="https://github.com/user-attachments/assets/609f6616-5157-429d-bba1-7bb03b894aae" />
)
