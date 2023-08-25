import {Routes, Route } from "react-router-dom";
import Postdetail from "./Postdetails";
import CreatePost from "./CreatePost";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/post" element={<Postdetail/>} />
      <Route path='/create' element={<CreatePost/>} />
    </Routes>


    </>
  );
}

export default App;
