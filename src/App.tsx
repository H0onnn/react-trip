import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test, HotelList } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
