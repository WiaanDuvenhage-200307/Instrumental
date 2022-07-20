import Login from "./Pages/Login";
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Dots from "./Components/Dots/Dots";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
