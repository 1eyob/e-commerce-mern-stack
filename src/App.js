
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import ProductList from "./pages/ProductList";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={< Home />}> </Route>
        <Route exact path="/products/:category"  element={< ProductList/>}> </Route>
        <Route exact path="/product/:id"  element={ <Product/> }> </Route>
        <Route exact path="/cart"  element={ <Cart/> }> </Route> 
        <Route exact path="/register"  element={ <Register/> }> </Route> 
        <Route exact path="/login"  element={ <Login/> }> </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
