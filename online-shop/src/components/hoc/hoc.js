import React from 'react';
import {Link} from 'react-router-dom';

export const Input = ({defaultValue,onChange,placeholder}) =>
  <input class="input is-rounded" type="text"  placeholder= {placeholder} onChange = {onChange} defaultValue = {defaultValue}></input>

export const changeProduct = ({Title,id,name,category,price,handleChangeCategory,handleChangePrice,handleChangeName,handleChangeId,saveable}) =>{
return (
    <div>
    <h2 class="text-center text-capitalize text-blue">{Title}</h2>
    <div className="row">
    <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
    <Input  placeholder="Enter the ID of the product" defaultValue ={id} onChange= {handleChangeId}></Input>
    <Input  defaultValue = {name} onChange= {handleChangeName}></Input>
    <Input  placeholder="Enter the category of the product" defaultValue ={category}  onChange= {handleChangeCategory}></Input>
    <Input  placeholder="Enter the price of the product" defaultValue ={price}  onChange= {handleChangePrice} ></Input>
    <button onClick = {() => this.onSave(id)} disabled = {saveable}>
        Save
    </button>
    <Link to ="/">
    <button>
        Cancel
    </button>
    </Link>
      </div>
    </div>
</div>);

}
