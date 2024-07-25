const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { product, ProductId, selectedColor, amount } = action.payload;
        console.group("ADD_TO_CART Action"); // Start console group
        console.log("Product:", product);
        console.log("Selected Color:", selectedColor);
        console.log("Amount:", amount);
        
        // Check if product already exists in the cart
        console.group("Checking for Existing Product in Cart"); // Start console group
        console.log("Cart before find:", state.cart);
        let exitProduct = state.cart.find((currentItem) => {
            console.log("Current ProductId:", currentItem.ProductId);
            console.log("Expected ProductId:", ProductId + selectedColor);
            return currentItem.ProductId === ProductId + selectedColor;
        });
        console.log("Exit Product:", exitProduct);
        console.groupEnd(); // End console group
        
        if (exitProduct !== undefined) {
            let updatedCart = state.cart.map((currentItem) => {
                if (currentItem.ProductId === ProductId + selectedColor) {
                    let newAmount = currentItem.amount + amount;
                    return { ...currentItem, amount: newAmount };
                } else {
                    return currentItem;
                }
            });
            console.log("Updated Cart:", updatedCart);
            console.groupEnd(); // End console group
            return { ...state, cart: updatedCart };
        } else {
            let cartProduct = {
                ProductId: ProductId + selectedColor,
                amount,
                selectedColor,
                Price: product.Price,
                quantity: product.quantity,
                ProductName: product.ProductName,
                Productimg: product.Productimg,
                quantity:product.quantity,

            };
            console.log("New Cart Product:", cartProduct);
            console.groupEnd(); // End console group
            return { ...state, cart: [...state.cart, cartProduct] };
        }
    }


       if(action.type ==="SET_DEC"){
        let updatedCart = state.cart.map((currentItem) =>{
            if(currentItem.ProductId === action.payload){
                let decAmount  = currentItem.amount -1

                if(decAmount <= 1){
                    decAmount = 1

                }

                return{
                    ...currentItem,
                    amount: decAmount 
                }
            }else{
                 return currentItem
            }
        })
        return{
            ...state, cart:updatedCart,
        }

       }

       if (action.type === "SET_INC"){
        let updatedCart = state.cart.map((currentItem) =>{
            if (currentItem.ProductId === action.payload){
                console.log(currentItem)
                let IncAmount  = currentItem.amount + 1

               if(IncAmount >= currentItem.quantity)
                 IncAmount = currentItem.quantity

                return{
                    ...currentItem,
                    amount: IncAmount 
                }

            }else{
                return currentItem
            }

        })
        return{
            ...state,cart:updatedCart

        }
       }




    if (action.type === "REMOVE_FROM_CART") {
        let updatedCart = state.cart.filter(
            currentItem => currentItem.ProductId !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CLEAN_ITEM") {
        return {
            ...state,
            cart: [],
        };
    }

    if(action.type === "CART_TOTAL_ITEM"){

           
              
                let updatedCartItemval =state.cart.reduce((initialvalue ,currentItem ) =>{
                  
                    let{amount} = currentItem;

                     initialvalue = initialvalue + amount;

                     return initialvalue



          } ,0 );

          return {
            ...state,
            totalItems:updatedCartItemval
          }
    
    }

      
        if( action.type === "CART_TOTAL_PRICE" ){

            let total_Price =state.cart.reduce((initialvalue,currentItem )=> {
                console.log(currentItem,"currentItem")
                let {Price,amount} = currentItem
                initialvalue = initialvalue + amount * Price
                return initialvalue

                
             },0)
             return{
                ...state,
                totalAmount:total_Price

             }

        }






    return state;


};

export default CartReducer;
