import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:vulname" element={<Main></Main>}></Route>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
