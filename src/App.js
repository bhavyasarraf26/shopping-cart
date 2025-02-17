import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
  	<div>
  		<div className="bg-slate-900">
  			<Navbar/>
      </div>
  			<Routes>
  				<Route path="/" element={<Home/>}/>
  				<Route path="/cart" element={<Cart/>}/>
  			</Routes>
  	</div>
  	);
};

export default App;
