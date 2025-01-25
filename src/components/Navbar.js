import {FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import logo from "../logo.png";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
  	<div>
  		<nav className="flex justify-between items-center h-20 mx-auto max-w-6xl">
  			<div className="ml-5">
          <NavLink to="/">
  					<img src={logo} className="h-14"/>
  			  </NavLink>
        </div>
  			<div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
  				<NavLink to="/">
  					<p>Home</p>
  				</NavLink>
  				<NavLink to="/cart">
	  				<div className="relative">
	  					<FaShoppingCart className="text-2xl"/>
              {
                cart.length > 0 ?
                <span className="absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}</span> :
                  <span/>
              }
	  				</div>
  				</NavLink>
  			</div>
  		</nav>
  	</div>
  );
};

export default Navbar;
