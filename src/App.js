import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Circles from "./pages/Circles.js";
import Contempt from "./pages/Contempt.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-site" element={<Circles />} />
        <Route path="/my-site/v2" element={<Contempt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
