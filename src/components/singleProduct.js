import React, { Component } from 'react'
import {DataContext} from './Context'
import { Link } from "react-router-dom";
import './detail.css'

 class details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }
    getProducts = ()=>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data =res.filter(item =>{
                return item.id === this.props.match.params.id
            })
            this.setState({product:data})
        }

        };
        componentDidMount(){
            this.getProducts();
        }


    
    render() {
        const {product } = this.state;
        const {addCart} = this.context;
        return (
            <>
              {
                product.map(item => (
                    <div className='details' key={item.id}>
                        <img src={item.src} alt=''/>
                        <div className='box'>
                            <div className='row'>
                                <h2>{item.title}</h2> <br/>
                                <span>Price {item.price}</span>
                            </div>
                            <p>{item.description}</p>
                            <Link to='/cart' className='cart' onClick={()=>addCart(item.id)}>
                            Add to cart</Link>
                        </div>
                    </div>
                ))
              }
            
           </>  
        )
    }   
}

export default details
