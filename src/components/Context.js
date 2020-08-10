import React, { Component } from 'react'
//import images from '../asset/images.jpeg'

export const DataContext = React.createContext();

 export class DataProvider extends Component {
     state ={
         products : [
            {
                "id": "5",
                "title": " Watch",
                "src": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "content": "GUESS CONNECT WATCH",
                "description":"Best watch for men",
                "price": 430.9,
                "count": 1
            },

            {
                "id": "2",
                "title": "Shoe",

                "src": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "content": "Shoe Gucci",   
                "description":'Black Sport Shoe',             "price": 19,
                "count": 1
            },
            {
                "id": "3",
                "title": "Bag",
                "src": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "content": "Bag",  
                "description":'HandBag',              "price": 19,
                "count": 1
            },
            {
                "id": "4",
                "title": "Mask",
                "src": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "content": "Glam..",
                "description": "'70s RETRO GLAM KEFIAH",
                "price": 19,
                "count": 1
            },
            {
                "id": "1",
                "title": "Shirt",
                "src":"https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "content": "Shirt Gucci",
                "description":'Red strips',
                "price": 23,
                "count": 1
            },
            {
                "id": "6",
                "title": " Watch",
                "src": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "content": "GUESS CONNECT WATCH",
                "description":"Best watch for men",
                "price": 430.9,
                "count": 1
            },
            
         ],
         cart:[],
         toatl:[],
     };



     addCart =(id)=> {
         const {products, cart}=this.state;
         const check = cart.every(item =>{
             return item.id !==id
         })
         if(check){
            const data = products.filter(product => {
                return product.id === id
            })
            this.setState({cart:[...cart, ...data]})

         }else {
             alert('This product is add!!')
         }
         
     

        
        };
     reduction = id => {
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item.id===id){
                item.count=== 1 ? item.count =1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
       
    }; 
    increase = id => {
     const {cart} = this.state;
     cart.forEach(item =>{
         if(item.id === id){
            item.count += 1 ;
         }
     })
     this.setState({cart:cart});
     this.getTotal();
    };
    removeProduct = id => {
        const {cart} = this.state;
        cart.forEach((item, index) =>{
            if(item.id ===id){
                cart.splice(index , 1)
            }
        })
        this.setState({cart:cart});

    };
    getTotal = () => {
       const{cart} = this.state;
       const res = cart.reduce((prev, item)=>{
           return prev + (item.price* item.count);
       }, 0)
       this.setState({total:res})
    }
    render() {
        const {products, cart,total} =this.state;
        const {addCart,reduction, increase,removeProduct,getTotal}=this;
      return(
          <DataContext.Provider value={{products, addCart , cart ,reduction ,increase,removeProduct,total,getTotal}}>
              {this.props.children}
          
          </DataContext.Provider>
      )
    }
}
