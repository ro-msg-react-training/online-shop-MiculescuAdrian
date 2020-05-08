import React, {Component} from 'react';
import { Switch,Route } from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from './components/ProducitList';
import Checkout from './components/Checkout';
import UpdateProduct from './components/UpdateProduct';
import NewProduct from './components/NewProduct';
import {ProductConsumer} from "./components/context";
import SalesChart from './components/SalesChart';
import Home from './components/Home';
import {readChart} from './js/actions/index';
import {connect} from "react-redux";
const mapToStateProps = state =>{
    return{ 
        chartData: state.chartData
    };
};
function mapDispatchToProps(dispatch)
  {
    return {
        readChart: (payload) => dispatch(readChart(payload))  
    };
  }
class App extends Component 
{
    componentDidMount (){
        const sGetProductURL = 'http://localhost:4000/sales';
        (fetch(sGetProductURL)
        .then(response => response.json())
        .then(products => this.props.readChart({products},)));

    }
    render(){
        return (

       <React.Fragment>
        <Navbar></Navbar>
        <Switch>
        <Route  exact path ="/" component = {Home}></Route>
        <Route path ="/newProduct" component = {NewProduct}></Route>
        <Route path ="/charts" component = {SalesChart}></Route>
        <Route path ="/productList" component = {ProductList}></Route>
        <Route path ="/details" component = {Details}></Route>
        <Route path ="/cart" component = {Cart}></Route>
        <Route path ="/checkout" component = {Checkout}></Route>
        <Route path ="/update" component = {UpdateProduct}></Route>
        <Route  component = {Default}></Route>         
        </Switch>
       </React.Fragment>
        );
    }
}
export default connect(mapToStateProps,mapDispatchToProps)(App);
