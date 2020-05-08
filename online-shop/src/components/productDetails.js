import React from 'react';



function ProductDetails(props) {
    return (
      <div>
        <h1 className = "title is-1 has-text-danger product-title">  {props.name} </h1>
        <hr></hr>
        {/* <Button color="primary">My Bulma button</Button> */}
    <p className>{props.name}'s id is {props.id}</p>
    <p>{props.name}'s price is {props.price}</p>
    <p>{props.name}'s category is {props.category}</p>
    <p>Description: {props.descreption}</p>
    </div>
    );
  }
export default ProductDetails