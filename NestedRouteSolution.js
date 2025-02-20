```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ParentRoute />}>
          <Route path=":childId" element={<ChildRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function ParentRoute() {
  let { id } = useParams();
  return (
    <div>Parent Route ID: {id}
      <Routes>
        <Route path=":childId" element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

function ChildRoute() {
  let { id, childId } = useParams();
  return (
    <div>Child Route ID: {childId}, Parent ID: {id}</div>
  );
}

export default App;
```