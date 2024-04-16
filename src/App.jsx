import { TextList } from "./pages/TextList";
import TextListDelete from "./pages/TextListDelete";
import ChapterListPage from "../src/pages/ChapterListPage";
import Edit from "./pages/edit";
import MainPage from "./pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Qs } from "./pages/Qs/Qs";
import QsEdit from "./pages/QsEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ChapterListPage />} />
          <Route path="/textlist/:index" element={<TextList />} />
          <Route path="/textlistdelete/:index" element={<TextListDelete />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/qs" element={<Qs />} />
          <Route path="/qsEdit" element={<QsEdit />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
