import { TextList } from "./pages/TextList";
import ChapterListPage from "../src/pages/ChapterListPage";
import Edit from "./pages/edit";
import MainPage from "./pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ChapterListPage />} />
          <Route path="/textList" element={<TextList />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
