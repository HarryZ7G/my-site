import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Circles from "./pages/Circles.jsx";
import Contempt from "./pages/Contempt.jsx";

function App() {
  return (
    <BrowserRouter basename="/my-site">
      <Routes>
        <Route path="/v1" element={<Circles />} />
        <Route path="" element={<Contempt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
