import {READ_CHART,REMOVE_PRODUCT,REMOVE_PRODUCT_SUCCESS,REMOVE_PRODUCT_FAILURE,READ_PRODUCT_LIST,READ_UPDATE,FAILURE_UPDATE,SUCCESS_UPDATE,READ_PRODUCT} from "../constants/contants";

//initial state of the state
const initialState = 
{   chartData : [],
    singleProduct:[],
    product : [],
    initial_messsage:'',
    success:'',
    error:''
}

// the root of the reducers, cotains all the functions and specific types to control de state of the app
function rootReducer(state = initialState, action)
{
    if(action.type === REMOVE_PRODUCT)
    {
        return Object.assign({},state,{
            message:"Remove product was initialize"
        });
    }
    if(action.type === REMOVE_PRODUCT_SUCCESS)
    {
        return Object.assign({},state,{
            success:"The product has been successfully removed!"
        }); 
    }
    if(action.type === REMOVE_PRODUCT_FAILURE)
    {
        return Object.assign({},state,{
            error:"An error appeared at the deletion of the item!"
        });
        
    }
    if(action.type === READ_UPDATE)
    {
        return Object.assign({},state,{
            message:"The saving process has been initilized!"
        });
    }
    if(action.type === FAILURE_UPDATE)
    {
        return Object.assign({},state,{
            success:"The product has been successfully updated!"
        });  
    }
    if(action.type === SUCCESS_UPDATE)
    {
        return Object.assign({},state,{
            error:"An error appeared during save,please try again!"
        });
        
    }
    if(action.type === READ_PRODUCT_LIST)
    {
        return Object.assign({},state,{
           product: state.product.concat(action.payload)
        });
        
    }
    if(action.type === READ_PRODUCT)
    {
       let test = Object.assign({},state,{
        singleProduct: action.payload
     });
       console.log(test);
       return test;
        }
        if(action.type === READ_CHART)
    {
       let chartData= Object.assign({},state,{
        chartData: action.payload
     });
     return chartData;
    }
        
    
    
   
    return state;
}

export default rootReducer;