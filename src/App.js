import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/"  element={<ProductListing/>} />
          <Route path='/product/:productId'  element={<ProductDetails/>} />
          <Route path='*'> 404 not Found </Route>
      </Routes>
    </div>
  );
}

export default App;
