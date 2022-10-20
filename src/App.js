import './App.css';
import ReactDOM from "react-dom";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
