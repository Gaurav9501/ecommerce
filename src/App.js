import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar';
import CategoryCompo from './components/CategoryPage/CategoryCompo';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<CategoryCompo />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );

}

export default App;
