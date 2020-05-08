import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
import {connect} from "react-redux";
import {successUpdate,failureUpdate,readUpdate} from "../js/actions/index";
import {Input,changeProduct} from './hoc/hoc';

//bring the props from the redux
const mapToStateProps = state =>{
    return{ message: state};
  };
//bring the functions from the redux
  function mapDispatchToProps(dispatch)
  {
    return {
    readUpdate: () => dispatch(readUpdate()),
    successUpdate: (id) => dispatch(failureUpdate(id)),
    failureUpdate: (payload) => dispatch(successUpdate(payload))  
    };
  }
  
//component to create the update page of the products
 class Checkout extends Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
            name : props.message.singleProduct.name,
            category: props.message.singleProduct.category,
            price: props.message.singleProduct.price,
            saveable : false
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onEmptyCheck = this.onEmptyCheck.bind(this);
    }
    onEmptyCheck()
    {
     var myState = this.state;
     if(myState.id === '' || myState.name === '' || myState.category === '' || myState.price === '')
     {
         return true;
     }
     return false;
    }
    onSave(payload,id){
        this.props.readUpdate();
        console.log(this.props.message.initial_message);
        let sURL = 'http://localhost:4000/products/' + id;
        return fetch(sURL, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            this.props.successUpdate(id);
            console.log(this.props.message.success);
            return res;
        }).catch(err => err);
    }
    async handleChangeName(event)
    {   
        const inputValue = event.target.value;  
        await this.setState({name:inputValue})
        if(this.onEmptyCheck())
        {
            this.setState({saveable:true});
        }
    }
    async handleChangeCategory(event)
    {
    const inputValue = event.target.value;
    await   this.setState({category:inputValue})
    if(this.onEmptyCheck())
    {
        this.setState({saveable:true});
    }
    }
    async handleChangePrice(event)
    {
        const inputValue = (event.target.validity.valid) ? event.target.value : ''
        await this.setState({price:inputValue})
        if(this.onEmptyCheck())
        {
            this.setState({saveable:true});
        }
    }
    render() {
        return (
            <ProductConsumer>
            {
                (value) => {
                    const { id,  name, category, price } =
                        value.detailProduct;

                    return (
                        <div>
                        <h2 class="text-center text-capitalize text-blue">Update the product</h2>
                        <div className="row">
                        <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                        <Input  placeholder="Enter the ID of the product" defaultValue ={id} ></Input>
                        <Input  defaultValue = {this.state.name}></Input>
                        <Input  placeholder="Enter the category of the product" defaultValue ={this.state.category}  onChange= { this.handleChangeCategory}></Input>
                        <Input  placeholder="Enter the price of the product" defaultValue ={this.state.price}  onChange= { this.handleChangePrice} ></Input>
                        <button onClick = {() => this.onSave(this.state,id)} disabled = {this.state.saveable}>
                            Save
                        </button>
                        <Link to ="/">
                        <button>
                            Cancel
                        </button>
                        </Link>
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
export default connect(mapToStateProps,mapDispatchToProps)(Checkout );