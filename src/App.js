import Add from "./components/Add";
import Layout from "./components/Layout";
import Update from "./components/Update";
import PizzaBox from "./components/PizzaBox";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/pizza" element={<PizzaBox />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
