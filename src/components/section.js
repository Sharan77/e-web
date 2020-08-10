import React, { Component } from 'react'
import Products from './products'
import singleProduct from './singleProduct'
import {Route } from "react-router-dom"
import Cart from './cart'
//import ProductList from './components/productList'

 class section extends Component {
    render() {
        return (
            <div>
                <section>
                    <Route path='/product' component={Products} exact />
                    <Route path='/product/:id' component={singleProduct}  />
                    <Route path='/cart' component={Cart}  />
                </section>  
            </div>
        )
    }
}
export default section