import {ADD_TO_CART,REMOVE_ONE_FROM_CART,REMOVE_ALL_FROM_CART,CLEAR_CART,LIST_CARD} from "../actions/shoppingActions";

export const initialStateShopping= {
    products:[
        {id:1, name: 'Leche', descripcion: "Leche entera La Serenisima", precio: 10},
        {id:2, name: 'Cafe', descripcion: "Cafe con Crema Cabrales", precio: 11},
        {id:3, name: 'Azucar', descripcion: "Azucar Ledesma", precio: 5}
    ],
    cart:[]
};

var prod={};
var carFinal= {};
var carModif= {};
var cantidad=0;

export const shoppingReducers = (state, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const prodcar= state.cart.filter((prodselec) => prodselec.id ===action.payload.product.id);
           

            if (prodcar.length===0)
            {
                console.log("En ADD_TO_CART, con cantidad=1");
                prod= {...action.payload.product, cantidad:1};
                console.log("prod", prod);

                return {...state,
                    cart: [...state.cart, prod]
                };
            }
            else
            {

                console.log("En ADD_TO_CART, con cantidad>1");
                
                console.log("prodcart=", prodcar);

                console.log("prodcart.id=", prodcar[0].id);
                
                console.log("prodcart.cantidad=", prodcar[0].cantidad);

                const cantidad= prodcar[0].cantidad + 1;

                const cartnew = state.cart.filter((product) => product.id !== action.payload.product.id);   

                prod= {...action.payload.product, cantidad:cantidad};

                console.log("prod", prod);

                carFinal= [...cartnew, prod]


                console.log("prodFinal=", carFinal);

                return {...state,
                    cart: carFinal
                };
            };

/*
            return {...state,
                cart: [...state.cart, action.payload.product]
            };
*/        
        case REMOVE_ONE_FROM_CART:
            
            const cartdel = state.cart.filter((product) => product.id === action.payload.product.id);

            if (cartdel.length>= 1)
            {
                cantidad= cartdel[0].cantidad;

                if (cantidad===1) 
                {
                    const cartnew = state.cart.filter((product) => product.id !== action.payload.product.id);  
                    
                    return {...state, 
                        cart : cartnew
                    };
                }
                else
                {
                    cantidad= cantidad-1;
                    
                    carModif= {...action.payload.product, cantidad:cantidad};

                    const carnew = state.cart.filter((product) => product.id !== action.payload.product.id);   

                    carFinal= [...carnew, carModif]
            
                    return {...state, 
                        cart : carFinal
                    };
                };
            }

        case LIST_CARD:
            return {...state,
            };

         case REMOVE_ALL_FROM_CART:
            return {count: state.count - 1};
        case CLEAR_CART:
            return {count: state.count - 1};   
        default:
          return state;
      }
    };
 