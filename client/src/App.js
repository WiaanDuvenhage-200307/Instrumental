import Login from "./Pages/Login";
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import InventoryManagement from "./Pages/InventoryManagement";
import OrderProcessing from "./Pages/OrderProcessing";
import AboutUs from "./Pages/AboutUs";
import './Assets/base.scss';
import IndividualProduct from "./Pages/IndividualProduct";
import Chart from "./Components/SubComponents/Chart/Chart";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products" element={<ProductPage/>}></Route>
            <Route path="/inventory-management" element={<InventoryManagement/>}></Route>
            <Route path="/order-processing" element={<OrderProcessing/>}></Route>
            <Route path="/about-us" element={<AboutUs/>}></Route>
            <Route path="/individual-product" element={<IndividualProduct/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
