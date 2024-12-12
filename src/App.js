import Add from "./components/Add";
import Update from "./components/Update";
import {BrowserRouter , Routes , Route} from "react-router-dom";
const App = () => {

  return (
    <div className="container">
      <h1 className="text-center my-5">React Redux CRUD</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
