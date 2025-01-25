import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import CartItem from "../components/CartItem.js";

const Cart = () => {
	const {cart} = useSelector((state) => state);
	const [totalAmount, setTotalAmount] = useState(0);
	useEffect(()=>{
		setTotalAmount(cart.reduce((accumulator, currItem) => accumulator+currItem.price, 0));
	}, [cart])
  return (
  	<div className="my-10">
  		{
  			cart.length > 0 ?
  			(
          <div className="flex justify-center">
    				<div className="flex flex-col w-4/12 mr-14 gap-y-10 justify-center items-center">
    					{
                cart.map((item, index) => <CartItem key={item.id} item={item} itemIndex={index}/>)
              }
    				</div>
    				<div className="flex flex-col w-3/12 justify-between">
    					<div>
    						<div className="text-green-700 uppercase font-bold text-sm mt-12 -mb-1">Your Cart</div>
    						<div className="uppercase text-green-700 text-3xl font-extrabold">Summary</div>
    						<p className="mt-2">
    							<span className="font-semibold text-sm text-gray-700">Total Items: {cart.length}</span>
    						</p>
    					</div>
    					<div>
    						<p className="font-semibold text-sm text-gray-700">Total Amount : <span className="text-black font-extrabold">${totalAmount}</span></p>
                <button className="bg-green-700 py-1 px-3 rounded-md mt-4 text-white text-md font-semibold w-full">Checkout Now</button>
    					</div>
    				</div>
          </div>
  			) :
  			(
          <div className="flex flex-col justify-center items-center h-[80vh] w-full">
    				<h1 className="capitalize font-extrabold text-3xl">No cart item</h1>
    				<Link to="/">
    					<button className="bg-green-700 py-1 px-3 rounded-md mt-3 text-white text-lg font-semibold">Shop Now</button>
    				</Link>
          </div>
  			)
  		}
  	</div>
  );
};

export default Cart;
