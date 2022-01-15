import 'bootswatch/dist/lux/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './views/admin-ui/admin-login';
import UsersAdmin from './views/admin-ui/users-admin/users-admin';
import ProductsAdmin from './views/admin-ui/products-admin/products-admin';
import Home from './views/user-ui/main-views/home';
import DogsInfo from './views/user-ui/main-views/dogs-info';
import Shop from './views/user-ui/shop/shop';
import ProductDetail from './views/user-ui/shop/product-details';
import Cart from './views/user-ui/shop/cart';

function App() {
  return (
      <Router basename='/dog-shop'>
		  <Routes>
			  {/* ADMIN ROUTES */}
			  <Route path="admin" element={<AdminLogin/>}/>
			  <Route path="admin/users" element={<UsersAdmin/>}/>
			  <Route path="admin/products" element={<ProductsAdmin/>}/>
			  {/* USER UI */}
			  <Route path="*" element={<Home/>}/>
			  <Route path="/shop" element={<Shop/>}/>
			  <Route path="/dogs-info" element={<DogsInfo/>}/>
			  <Route path="/product-detail/:id" element={<ProductDetail/>}/>
			  <Route path="/cart" element={<Cart/>}/>
		  </Routes>
	  </Router>
  );
}

export const APIURL = 'http://localhost/ecommerce-test-api/urls'

export default App;
