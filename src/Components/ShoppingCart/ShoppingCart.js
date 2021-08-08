import {shoppingReducers,initialStateShopping} from "../../reducers/shoppingReducers";
import {useReducer } from "react";
import ProductItem from "../ProductItem/ProductItem";
import ListProducts from "../ListProducts/ListPorducts";
import ImporteTotalProducts from "../ImporteTotalProduscts/ImporteTotalProducts";
import {ADD_TO_CART, REMOVE_ONE_FROM_CART} from "../../actions/shoppingActions"

const ShoppingCart = () => {
  
    const [state,dispatch] =useReducer(shoppingReducers,initialStateShopping);

    const addToCart = (data) => {
        console.log("En addToCart ", data);

        dispatch({
            type: ADD_TO_CART,
            payload: {product :data}
        })

    };

    const delFromCart =(data)=>{
        dispatch({
            type: REMOVE_ONE_FROM_CART,
            payload: {product: data}
        })
    }
/*
    const TotalCart = () =>{
        console.log("state.cart= ", state.cart);
    }
*/
    const ClearCart =()=>{
        
    }

    return (  
        <>
            <h1>Shopping Cart</h1>
            <ProductItem products={state.products} addToCart={addToCart} delFromCart={delFromCart}/>
            <h3>Productos</h3>
            <ListProducts selectproducts={state.cart}/>
            <ImporteTotalProducts products={state.cart}/>
        </>
    );
}
 
export default ShoppingCart;
