import {Link} from "react-router-dom"
function Navbar() {
 
    return (
      <>
    <ul id="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/createpost">Add Post</Link></li>
    </ul>
  
      </>
    );
  }
  
  export default Navbar;