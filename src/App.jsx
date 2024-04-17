import { TextList } from "./pages/TextList";
import TextListDelete from "./pages/TextListDelete";
import ChapterListPage from "../src/pages/ChapterListPage";
import Update from "./pages/edit";
import MainPage from "./pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ChapterListPage />} />
          <Route path="/textlist/:index" element={<TextList />} />
          <Route path="/textlistdelete/:index" element={<TextListDelete />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/textlist/:index/edit/:id" element={<Update isEdit={true} />} />

          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
