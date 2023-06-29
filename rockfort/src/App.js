import { Home } from "./components/home/Home";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Audience from "./components/Audience/Audience";
import Footer from "./components/Footer/Footer";
function App() {
  return (
<>

<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/audience" element={<Audience/>}/>
</Routes>
<Footer/>
</>
  );
}

export default App;
