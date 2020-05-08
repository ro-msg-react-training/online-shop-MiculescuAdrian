import React, { Component } from 'react'
import { ProductConsumer } from './context'

import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import {connect} from "react-redux";
import {removeProduct,removeProductSuccess,removeProductFailure,readProduct} from "../js/actions/index";


const mapToStateProps = state =>{
    return{ singleProduct: state};
  };
  function mapDispatchToProps(dispatch)
  {
    return {
      removeProduct: () => dispatch(removeProduct()),
      removeProductSuccess: () => dispatch(removeProductSuccess()),
      removeProductFailure: (payload) => dispatch(removeProductFailure(payload)),
      readProduct: (payload) => dispatch(readProduct(payload)) 
    };
  }

export default class Details extends Component {
    render() {

        return (
            <ProductConsumer>
                {
                    (value) => {
                        const { id, img, name, category, price } =
                            value.detailProduct;

                        return (
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                                    <h1>
                                        {name}
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>model: {name}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by : <span className="text-uppercase">{category}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price: <span>$</span> {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product:
                      </p>
                                        <p className="text-muted lead">
                                            {category}
                                        </p>
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/checkout" className="ml-auto">
                                                <ButtonContainer onClick = {()=> value.addToCart(value.detailProduct)}>
                                                    <span className="mr-2">
                                                        <i className="fas fa-cart-plus">checkout</i></span>
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/update" className="ml-auto">
                                                <ButtonContainer onClick = {()=> value.addToCart(value.detailProduct)}>
                                                    <span className="mr-2">
                                                        <i className="fas fa-cart-plus">Edit</i></span>
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );

                    }
                }
            </ProductConsumer>
        )
    }

}
connect(mapToStateProps,mapDispatchToProps)(Details);
