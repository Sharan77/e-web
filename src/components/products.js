import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import  {DataContext} from './Context'
import './productlist.css'

class products extends Component {
     static contextType = DataContext;
    render() {
        const {products }=this.context;
        return (
            <div id='product'>
                {
                    products.map(product =>(
                    <div className="card" key={product.id}> 
                        <Link to={`/product/${product.id}`}>
                            <img src={product.src} alt='a'/>
                        </Link>
                        <div className='content'>
                            <h4>
                                <Link to={`/product/${product.id}`}>{product.title}</Link>
                            </h4>
                            <span>Rs : {product.price}</span>
                            <p>{product.description}</p>
                            <button onClick = {()=> this.context.addCart(product.id)}>Add to cart</button>
                        </div>    

                    </div> 
                  ))
                }

            </div>
        )
    }
}
export default  products