import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ProductDetails(props) {
  return (
    <div>
      <h1> Your product name is {props.name} </h1>
  <p>{props.name}'s id is {props.id}</p>
  <p>{props.name}'s price is {props.price}</p>
  <p>{props.name}'s category is {props.category}</p>
  <p>Description: {props.descreption}</p>
  </div>
  );
}
function ProductListItem(props)
{
  return (
    <li>
      {props.products.name}
    <ul>
      <li>Category:{props.products.category}</li>
      <li>Price:{props.products.price}</li>
      <li>Description:{props.products.descreption}</li>
    </ul>
    </li>
  );
}
function  ProductList(props)
{
  const products = props.items;
  return(
    <ol>
      {products.map((product) =>
      <ProductListItem products = {product}/>
      )}
    </ol>
  );
}

const aProductDetails = {
  id: 1,
  name: "FloofHoof",
  category:"Dairy",
  price: 10,
  descreption: "A very floofy foam"
  };
const aProductList = [
  {
    id: 1,
    category: "Dairy",
    price:7,
    name:"FloofHoof",
    descreption: "A very floofy foam"
  },
  {
    id:2,
    category:"Sweets",
    price:11,
    name:"ChocoMania",
    descreption: "A cocoa M.A.N.I.A.C."
  },
  {
    id: 3,
    category:"Food?",
    price:10,
    name:"SpicyBites",
    descreption: "Oh...It Burns!"
  }];

function App() {
  return (
    <div>
      <ProductDetails name={aProductDetails.name}
      id = {aProductDetails.id}
      category = {aProductDetails.category}
    price = {aProductDetails.price}
    descreption ={aProductDetails.descreption} />
    <ProductList items = {aProductList}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
  

  