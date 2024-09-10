import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CardItem from "../components/cart-item";


const cartItems = [
  {
  productId : "abcd",
  photo : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsk3qpyutv-sZfVx0riiTgKpOeKX9d21SGkTO0IZhUw0MvSrEeN8SbGxHFl5a__ZYGi7onIARftwXlZ-_ol_IKk_Dl7jF-Tl02K4e13TfSjyhc_mlUnLlu1pwNNJWmYHTOiILbVL0&usqp=CAc",
  name : 'MacBook',
  price : 3000,
  quantity :4,
  stock : 10,  
  }
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;

const Card = () => {

  const [couponCode,setCouponCode] = useState<string>("")
  const [isValidCouponCode,setIsValidCouponCode] = useState<boolean>(false)

  useEffect(()=>{
  
    const timeOutId = setTimeout(() => {
      if(Math.random()>0.5){
           setIsValidCouponCode(true)
      }else{
        setIsValidCouponCode(false)
      }
    },1000);

    return () => {
    clearTimeout(timeOutId)  
    setIsValidCouponCode(false)
    }
  
  },[couponCode])

  return (
    <div className="cart">
    <main>
      {
        cartItems.map((i,idx) => (<CardItem key={idx} cartItem={i} />))
      }
    </main>
    <aside>
    
    <p>SubTotal : Rs:{subTotal}</p>
    <p>Shipping Charges : Rs:{shippingCharges}</p>
    <p>Tax: Rs.{tax}</p>
    <p>
    Discount : <em>- Rs.{discount}</em>
    </p>
    <p>
     <b>Total : Rs.{total}</b>  
    </p>
      
    <input
    placeholder="Coupon Code"
    type="text"
    value={couponCode}
    onChange={e => setCouponCode(e.target.value)}
    ></input>  
{/* couponCode && */}
    {
       couponCode && (
        isValidCouponCode
      ? 
      <span>Rs.{discount} 
      off using the <code>{couponCode}</code> </span>
      :<span className="red">Invalid Coupon <VscError/></span>

       )
      
    }
    {/* isValidCouponCode
      ? 
      <span>Rs.{discount} 
      off using the <code>{couponCode}</code> </span>
      :<span className="red">Invalid Coupon <VscError/></span>
 */}

    </aside>  
    </div>
  )
}

export default Card
