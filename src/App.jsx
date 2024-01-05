import { TextList } from "./pages/TextList";
import ChapterListPage from "../src/pages/ChapterListPage";
import Edit from "./pages/edit";
import MainPage from "./pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <TextList></TextList>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ChapterListPage />} />
          <Route path="/edit" element={<Edit />} />
          {/* <Route path="/list" element={<ChapterListPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
