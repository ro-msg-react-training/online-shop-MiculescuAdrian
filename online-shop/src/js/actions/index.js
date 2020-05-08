import {READ_CHART,REMOVE_PRODUCT,REMOVE_PRODUCT_SUCCESS,REMOVE_PRODUCT_FAILURE,READ_PRODUCT_LIST,READ_UPDATE,FAILURE_UPDATE,SUCCESS_UPDATE,READ_PRODUCT} from "../constants/contants";

//action to inform the starting of the remove process
export function removeProduct(id)
{
    return {
        type:REMOVE_PRODUCT
        
    }
    
};
//action to inform the starting of the remove process is successful
export function removeProductSuccess(id)
{
    return {
        type:REMOVE_PRODUCT_SUCCESS,
        removeProduct
       
    }
    
};

//action to inform the starting of the remove process has failed
export function removeProductFailure()
{
    return {
        type:REMOVE_PRODUCT_FAILURE
        
    }
    
};


//action to inform the starting of the read process is successful
export function readProductList(payload)
{
    return{
    type:READ_PRODUCT_LIST,
    payload
    };
}

//action to inform that the read of the update processs is successful
export function readUpdate()
{
    return{
    type:READ_UPDATE,
    };
}

//action to inform that the update processs has failed
export function failureUpdate(id)
{
    return{
    type:FAILURE_UPDATE,
    };
}
//action to inform that the update processs is successful
export function successUpdate()
{
    return{
    type:SUCCESS_UPDATE,
    };
}

export function readProduct(payload)
{
    return{
    type:READ_PRODUCT,
    payload
    };
}
export function readChart(payload)
{
    return{
    type:READ_CHART,
    payload
    };
}