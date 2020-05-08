import React, { Component } from 'react'
import{storeProducts,detailProduct} from "../data";
import { ThemeConsumer } from 'styled-components';
import {readProductList} from '../js//actions/index';
import {connect} from 'react-redux';
const ProductContext = React.createContext();
//Provider -> provider on the top of the app
//Consumer, cu astea vine createContext din react
function mapDispatchToProps(dispatch) {
    return{
        readProductList: product => dispatch(readProductList(product))
    };
}
 class ProductProvider extends Component {
     state = {
         //products:[...soreProducts] -> doesnt work becauase is a nested array, we can't copy the values of a nested array in this way
         products:[],
         checkout:[],
         detailProduct: detailProduct
     };
     componentDidMount()
     {
         const sGetProductURL = 'http://localhost:4000/products';
        fetch(sGetProductURL)
        .then(response => response.json())
        .then(
            
            products => this.setState({products},    
              
                ));
                
                this.setProduct();
     }
     setProduct = () =>{
        readProductList(this.state.products);
        //  let tempProducts = [];
        //  storeProducts.forEach(item =>{
        //      //copy the values with ...item instead of gettin reference of them
        //      const singleItem = {...item};
        //      //grab all the old values with ...tempProducts and we add the single item to it
        //      tempProducts = [...tempProducts,singleItem];

        //  })
        //  this.setState(()=>
        //  {
        //      return{products: tempProducts};
        //  });

     }
     getItem = id =>
     {
         const product = this.state.products.find(item => item.id === id);
         return product;
     }
     handleDetail = (id) =>
    {
        const product = this.getItem(id);

        this.setState(()=>{
            return{detailProduct:product};
        })
    }
    addToCart = (id) =>
    {
        let tempProducts = id;
        console.log(tempProducts);
    //  const product = this.getItem(id);
    //  const index = tempProducts.indexOf(product);
    //  product.inCart = true;
    //  product.count = 1;
    //  const price = product.price;
    //  product.total = price;

    //  this.setState(()=>{
    //    return {products:tempProducts, cart:[...this.state.cart, product]}
    //  },
    //  ()=>{
    //    this.addTotals();
    //  })
    }

    render() {
        return (
            //return all the childrens within the provider
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }
            }>      
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer,ProductContext};
