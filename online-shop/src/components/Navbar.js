import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import home from '../images/home.png';
import "@fortawesome/fontawesome-free/css/all.css";
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import {readChart} from '../js/actions/index';
import {connect} from "react-redux";

const mapToStateProps = state =>{
    return{ chartData: state.chartData};
};
function mapDispatchToProps(dispatch)
  {
    return {
        readChart: (payload) => dispatch(readChart(payload))  
    };
  }

class Navbars extends Component {
    render() {
        
        return (
        <NavWrapper className = "navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to ="/">
        <img src = {home}  alt ="home" className = "navbar-brand"></img>
        </Link>
        <ul className = "navbar-nav align-items-center">
            <li className ="nav-items ml-5">
                <Link to ="/newProduct" className="nav-link">
                    New Product
                </Link>
            </li>
        </ul>
        <Link to = "/charts" className = "ml-auto">
            <ButtonContainer>
                <span className = "mr-2">
                 <i className = "fas fa-cart-plus">Charts</i></span>
            
            </ButtonContainer>
            </Link>
        </NavWrapper>
        )
    }
}
const Navbar = connect(mapToStateProps,mapDispatchToProps)(Navbars);
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transfrom: capitalize !important;  
}
`;
export  default Navbar;


