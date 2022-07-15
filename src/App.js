import "./App.css";
import Contents from "./components/Contents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playlists from "./components/Playlists";
import Practice from "./components/Practice";
import Videos from "./components/Videos";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NavHeader from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <NavHeader />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contents />}>
            <Route path="playlist" element={<Playlists />} />
            <Route path="practice" element={<Practice />} />
            <Route path="videos" element={<Videos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
