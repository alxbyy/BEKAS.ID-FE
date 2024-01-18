import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ProductDetail from './Pages/ProductDetail';
import ShopCategory from './Pages/ShopCategory'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='product/:productId' element={<ProductDetail />} />          
          <Route path='shop-category' element={<ShopCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
