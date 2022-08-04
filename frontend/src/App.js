import Home from './routes/home/index';
import Login from './routes/login/index';
import AllAds from './routes/allAds/index';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="ads" element={<AllAds />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
