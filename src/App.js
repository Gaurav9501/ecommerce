import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar';
import CategoryCompo from './components/CategoryPage/CategoryCompo';
function App() {
  return (
    <div>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<CategoryCompo />}></Route>
    </Routes>

    
     </div>
  );

}

export default App;
