import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Circles from "./pages/Circles.jsx";
import Contempt from "./pages/Contempt.jsx";

function App() {
  return (
    <BrowserRouter basename="/my-site">
      <Routes>
        <Route path="" element={<Circles />} />
        <Route path="/v2" element={<Contempt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
