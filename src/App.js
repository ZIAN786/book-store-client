import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu.js"
import Home from "./pages/Home.js";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/routes/PrivateRoute.js";
import AdminDashboard from "./pages/admin/Dashboard.js";
import AdminRoute from "./components/routes/AdminRoute.js";
import AdminCategory from "./pages/admin/Category.js";
import AdminProduct from "./pages/admin/Product.js";
import AdminProductUpdate from "./pages/admin/ProductUpdate.js";
import AdminProducts from "./pages/admin/Products.js";
import UserProfile from "./pages/user/Profile.js";
import UserOrders from "./pages/user/Orders.js";
import Shop from "./pages/Shop.js";
import Search from "./pages/Search.js";
import ProductView from "./pages/ProductView.js";
import CategoriesList from "./pages/CategoriesList.js";
import CategoryView from "./pages/CategoryView.js";
import Cart from "./pages/Cart.js";
import AdminOrders from "./pages/admin/Orders.js";


const PageNotFound = () => {
  return (
   <div className="d-flex justify-content-center align-items-center vh-100">
    <p className="fs-1 text-danger">404 | Page not found</p>
    </div>
    );
};

export default function App() {
  return (
   <BrowserRouter>
   <Menu />
   <Toaster position="top-right"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/categories" element={<CategoriesList />} />
      <Route path="/category/:slug" element={<CategoryView />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product/:slug" element={<ProductView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
      <Route path="user" element={<Dashboard />} />
      <Route path="user/profile" element={<UserProfile />} />
      <Route path="user/orders" element={<UserOrders />} />
     
     </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
       <Route path="admin" element={<AdminDashboard />} />
       <Route path="admin/category" element={<AdminCategory />} />
       <Route path="admin/product" element={<AdminProduct />} />
       <Route path="admin/products" element={<AdminProducts />} />
       <Route path="admin/product/update/:slug" element={<AdminProductUpdate />} />
       <Route path="admin/orders" element={<AdminOrders />} />
       
        </Route>
      <Route path="*" element={<PageNotFound />} replace />
      
    </Routes>

   </BrowserRouter>
  );
}


