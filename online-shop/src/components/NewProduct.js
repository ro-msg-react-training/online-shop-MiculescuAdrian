import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
import {connect} from "react-redux";
import {successUpdate,failureUpdate,readUpdate} from "../js/actions/index";
import {action} from "../js/store/index";
import {Input,changeProduct} from './hoc/hoc';
const mapToStateProps = state =>{
    return{ message: state};
  };
  function mapDispatchToProps(dispatch)
  {
    return {
    readUpdate: () => dispatch(readUpdate()),
    successUpdate: (payload) => dispatch(failureUpdate(payload)),
    failureUpdate: (payload) => dispatch(successUpdate(payload))  
    };
  }
 class Checkout extends Component {
    constructor()
    {
        super();
        this.state =
        {
            id: '',
            name : '',
            category: '',
            price: '',
            saveable : true
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onEmptyCheck = this.onEmptyCheck.bind(this);
    }
    onEmptyCheck()
    {
     var myState = this.state;
     if(myState.id === '' || myState.name === '' || myState.category === '' || myState.price === '')
     {
         return false;
     }
     return true;
    }
    //save the data in the back end with a post call
    onSave(payload,id){
        this.props.readUpdate();
        console.log(this.props.message.initial_message);
        let sURL = 'http://localhost:4000/products/';
        return fetch(sURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            this.props.successUpdate(payload);
            return res;
        }).catch(err => console.log(err));
    }
    //async call to update the state
    async handleChangeName(event)
    {
        const inputValue = event.target.value;
       await this.setState({name:inputValue})
        if(this.onEmptyCheck())
        {
            this.setState({saveable:false});
        }
    }
     //async call to update the state
    async handleChangeCategory(event)
    {
        const inputValue = event.target.value;
        await this.setState({category:inputValue});
        if(this.onEmptyCheck())
        {
            this.setState({saveable:false});
        }
    }
     //async call to update the state
    async handleChangePrice(event)
    {
        const inputValue = (event.target.validity.valid) ? event.target.value : this.state.id;
        await this.setState({price:inputValue});
        if(this.onEmptyCheck())
        {
            this.setState({saveable:false});
        }

    }
     //async call to update the state
    async handleChangeId(event)
    {
        const inputValue = event.target.value;
       await this.setState({id:inputValue});
        if(this.onEmptyCheck())
        {
            this.setState({saveable:false});
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
                       <changeProduct title = "test"></changeProduct>
                        <div className="row">
                        <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                        <Input placeholder =  "Enter the ID of the product" onChange= { this.handleChangeId}></Input>
                        <Input placeholder =  "Enter the ID of the name" onChange= { this.handleChangeName}></Input>
                        <Input placeholder =  "Enter the ID of the category" onChange= { this.handleChangeCategory}></Input>
                        <Input placeholder =  "Enter the ID of the price" onChange= { this.handleChangePrice}></Input>
                        <button onClick = {() => this.onSave()} disabled = {this.state.saveable}>
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