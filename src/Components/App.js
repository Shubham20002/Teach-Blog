import {Routes, Route } from "react-router-dom";
import Postdetail from "./Postdetails";
import CreatePost from "./CreatePost";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
 
  return (
    <> <div className="container">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Postdetail/>} />
      <Route path='/createpost' element={<CreatePost/>} />
    </Routes></div>

    </>
  );
}

export default App;
