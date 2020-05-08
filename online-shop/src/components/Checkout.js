import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

export default class Checkout extends Component {
    render() {
        return (
            <div>
                <h2 class="text-center text-capitalize text-blue">Create your custom product</h2>
                <div className="row">
                <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                <input class="input is-rounded" type="text" placeholder="Enter the ID of the product"></input>
                <input class="input is-rounded" type="text" placeholder="Enter the name of the product"></input>
                <input class="input is-rounded" type="text" placeholder="Enter the category of the product"></input>
                <input class="input is-rounded" type="text" placeholder="Enter the price of the product"></input>
                <ButtonContainer to ="/">
                    Back
                </ButtonContainer>
                <ButtonContainer>
                    Submit
                </ButtonContainer>
                  </div>
                </div>
            </div>
        )
    }
}
