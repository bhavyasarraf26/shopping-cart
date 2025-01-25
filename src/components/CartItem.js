import {FcDeleteDatabase} from "react-icons/fc";
import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "../redux/slices/CartSlice.js";
import {toast} from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }
  return (
  	<div className={`${cart.length-1 !== itemIndex ? "pb-5 border-gray-400 border-b-2" : ""} w-full`}>
  		<div className="flex flex-col lg:flex-row w-full">
  			<div className="h-[180px] mb-3 lg:mb-0">
  				<img src={item.image} className="w-full h-full"/>
  			</div>
  			<div className="ml-10">
  				<h1 className="text-gray-700 font-semibold text-xl">{item.title}</h1>
  				<h1 className="text-gray-700 text-md mt-3">{item.description.split(" ").slice(0, 15).join(" ")}</h1>
          <div className="flex items-center justify-between mt-5">
    				<div>
    					<p className="text-green-600 font-semibold">${item.price}</p>
    				</div>
    				<div onClick={removeFromCart} className="mr-5 cursor-pointer bg-red-300 flex justify-center items-center rounded-full w-7 h-7">
    					<FcDeleteDatabase/>
    				</div>
          </div>
  			</div>
  		</div>
  	</div>
  );
};

export default CartItem;
