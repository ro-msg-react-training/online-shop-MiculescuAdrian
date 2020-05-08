import React, { Component } from 'react'
import Product from './Product'
import Title from "./Title";
import {storeProducts} from "../data";
import {ProductConsumer} from "./context";
import {connect} from "react-redux";
import {readProductList} from '../js/actions/index';
import { branch, renderComponent } from 'recompose';
import Spinner from './hoc/Spinner';

const mapToStateProps = state =>{
    return{ products: state.product};
};
function mapDispatchToProps(dispatch)
  {
    return {
    readProductList: (payload) => dispatch(readProductList(payload))  
    };
  }
 class ProductLists extends Component {  
    componentDidMount()
    {
        const sGetProductURL = 'http://localhost:4000/products';
        fetch(sGetProductURL)
        .then(response => response.json())
        .then(
        (products) => this.props.readProductList(products),    
              
                );
    }
    render() {    
        return (
        <React.Fragment>
            <div className = "py-5">
            <div className="container">
                <Title name ="our" title="products"></Title>
            <div className ="row">
               {this.props.products.map(
                     product =>
                     {
                         return <Product key = {product.id} product ={product}/>;
                     }  
                   )}
            
            </div>
            </div>
            </div>
        </React.Fragment>
        )
    }
}
const enhance = branch(
    (props) => this.props.products.length === 0,
    renderComponent(Spinner)
  );
const ProductList = connect(mapToStateProps,mapDispatchToProps)(ProductLists);
export default ProductList;