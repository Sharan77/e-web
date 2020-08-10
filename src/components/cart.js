import React, { Component } from 'react'
import {DataContext} from '../components/Context'
//import { Link } from "react-router-dom";
import './detail.css'
import './cart.css'

export default class cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
   

    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        
        return (
            <>
            {
              cart.map(item => (
                  <div className='details cart' key={item.id}>
                      <img src={item.src} alt=''/>
                      <div className='box'>
                          <div className='row'>
                              <h2>{item.title}</h2> <br/>
                              <span>Rs : {item.price * item.count}</span>
                          </div>
                          <p>{item.description}</p>
                         <div className='amount'>
                          <button className='count' onClick={() =>reduction(item.id)}>-</button>
                          <span>{item.count}</span>
                          <button className='count' onClick={ () =>increase(item.id)}> + </button>
                         </div>
                      </div>
                      <div className='delete' onClick={ () =>removeProduct(item.id)}>X</div>
                  </div>
              ))
            }
            <div className='total'><h3>Total: Price :{total}</h3> </div>
            
            
          
         </>  
        )
    }
}
