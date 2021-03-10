import React from 'react'
import '../src/NavBar.css'

export default function NavBar({cartCount , onPageChange}) {
    return (
       <nav>
       <ul>
       <li className = "store"> <a href="/" onClick = {evt => {
           evt.preventDefault()
           onPageChange('store')
       }}> Store </a>    </li>
       <li className="cart-count">
       <a href="/cart"  onClick = {evt => {
        evt.preventDefault()
        onPageChange('cart')
    }}>
       <span role = "img" aria-label = "items in cart">
       <img className="icon" src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137282150.jpg" alt="cart &npsp;"/>
       </span>
       <span className="count">    {cartCount === 0 ? '': cartCount}</span>
       
         </a>
       </li>      
       </ul>
       </nav>
    )
}

