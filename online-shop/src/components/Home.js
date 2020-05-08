import React, { Component } from 'react'
import Product from './Product'
import Title from "./Title";
import {storeProducts} from "../data";
import {ProductConsumer} from "./context";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import { ButtonContainer } from './Button';
import {readProductList} from '../js/actions/index';
import { trackPromise } from 'react-promise-tracker';

const mapToStateProps = state =>{
    return{ products: state.product};
  };
  function mapDispatchToProps(dispatch)
  {
    return {
    readProductList: (payload) => dispatch(readProductList(payload))  
    };
  }
 class Homes extends Component {
     onNav (){
         const sGetProductURL = 'http://localhost:4000/products';
         trackPromise(fetch(sGetProductURL)
         .then(response => response.json())
         .then(products => this.props.readProductList({products},)));

     }
      
    render() {       
        return (
        <React.Fragment>
            <div className = "py-5">
            <div className="container">
                <Title name ="our" title="products"></Title>
            <div className ="row">
                <Link to ='/productList'>
                <ButtonContainer onClick = {() => this.onNav()}>
                    Go to the list
                </ButtonContainer>
                </Link>
            </div>
            </div>
            </div>
        </React.Fragment>
        )
    }
}
const Home = connect(mapToStateProps,mapDispatchToProps)(Homes);
export default Home;