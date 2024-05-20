import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test, HotelList, Hotel } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
