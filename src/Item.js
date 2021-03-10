import React from 'react'
const Item = ({ item , onAddToCart , children }) => {
 
    return(
    <li className = "item">
   <span className="item-name">
   {item.name}
   </span>

    <span className = "price">
    
     ${item.price} 
    </span>
    {children}
    </li>
    )};
  export default Item;