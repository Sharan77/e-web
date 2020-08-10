import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../pages/navbar.css'

class navbar extends Component {
    render() {
        return (
             <header>
                <div className='menu'>
                    <div className='logo'> <h3><a href='a'>Blog</a></h3></div>
                    <nav>
                        <ul>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        </ul>
                    </nav>

                </div>
                
            </header>
        )
    }
}
export default navbar