import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import ItemPage from './ItemPage'
import CartPage from './CartPage'
import CheckOutPage from './CheckOutPage'
import '../src/index.css'

const products = [
    { id: 1 , name: 'Phone' , price : 299},
    { id: 2 , name: 'Laptop' , price : 299},
    { id: 3 , name: 'HeadPhones' , price : 99},
    { id: 4 , name: 'Camera' , price : 799}
];
class App extends React.Component {
    state = {
        activePage: 'store',
       cart: [] 
    }
 handleAdd  = item => {
       this.setState(
           prev => ({
               cart: [...prev.cart ,item ]
           }) );
 };

 handlePageChange = page => {
     this.setState ({  activePage: page   } );
 }

render(){ 
    const {activePage , cart} = this.state
    return (
    <div className="App">
    <NavBar onPageChange={this.handlePageChange} cartCount = {cart.length} />
    <main>
    {activePage === 'store' ? 
    <ItemPage 
    onAddToCart = {this.handleAdd}
     items = {products} 
     />:( activePage === 'cart' ?
         <CartPage items = {cart}
         onPageChange = {this.handlePageChange}
         /> 
         :
         <CheckOutPage items = {cart}/>
        )}
    </main>
    </div>
);
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)