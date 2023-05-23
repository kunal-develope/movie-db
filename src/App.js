import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/notfound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
