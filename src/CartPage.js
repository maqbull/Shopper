import React from "react";
import Item from "./Item";

const summarizer = (result , item) => {
    // [1,2,2,2,2] key stored in array
  const existingItem =   result.find(i => i.id === item.id )

  if(!existingItem) {
      result.push({
          ...item ,
          count: 1
      })
  }
  else {
      existingItem.count++;
  }
  return result;
}
const CartPage = ({ items , onPageChange}) => {
    const cart = items.reduce(summarizer , [])
    return(
  <div className="CartPage">
  <h2>Cart Items</h2>
    <ul>
      {cart.map(item => (
        <Item key={item.id} item={item}>
        <span className="item-count">X</span>
        <spam className="item-count"> {item.count}</spam>
        
        </Item>
      ))}
    </ul>
    <div className="total">
    Total : $
    {cart.reduce((total , item) => {
        return total + item.price * item.count;
    }, 0 
    )}
    </div>
    <button className="checkout" onClick = {
        () => onPageChange('checkout')
    }>CheckOut Now</button>
  </div>
)};
export default CartPage;
