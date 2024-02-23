import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
import { Route, Routes,BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Sign />}/>
            <Route path="/" element={<Login />}/>
             <Route path="/home" element={<Home />}/>
             
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
