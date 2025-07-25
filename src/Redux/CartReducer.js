import { act } from "react"

export const intialstate={
    fav:[],
    cart:[],
   justNavigated:false,
   TotalPrice:0,
   orderhistory:[]
}
export const cartReducer=(state,action)=>{
  switch(action.type){
    case"Add_To_Fav":
    const exist=state.fav.find((item)=>item.id==action.payload.id)
    
    if(exist){
       return{
        ...state,
        fav:state.fav.filter((item)=>item.id!=action.payload.id)
       }
    }else{
           return{
            ...state,
            fav:[...state.fav,action.payload]
           }
    }
case "Add_To_Cart": {
  const existingItemIndex = state.cart.findIndex(
    (item) => item.id === action.payload.id && item.size === action.payload.size
  );

  const size = action.payload.size;
  const fromDetailScreen = action.payload.fromDetailScreen || false;

  const isS = size === 'S' || size === '250gm';
  const isM = size === 'M' || size === '500gm';
  const isL = size === 'L' || size === '1Kg';

  if (existingItemIndex !== -1) {
    const updatedCart = [...state.cart];
    const item = updatedCart[existingItemIndex];

    updatedCart[existingItemIndex] = {
      ...item,
      fromDetailScreen: fromDetailScreen,
      squantatity: fromDetailScreen ? (isS ? item.squantatity + 1 : 0) : item.squantatity + 1,
      mquantatity: fromDetailScreen ? (isM ? item.mquantatity + 1 : 0) : item.mquantatity + 1,
      lquantatity: fromDetailScreen ? (isL ? item.lquantatity + 1 : 0) : item.lquantatity + 1,
    };

    return {
      ...state,
      cart: updatedCart,
    };
  } else {
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          ...action.payload,
          fromDetailScreen,
          squantatity: fromDetailScreen ? (isS ? 1 : 0) : 1,
          mquantatity: fromDetailScreen ? (isM ? 1 : 0) : 1,
          lquantatity: fromDetailScreen ? (isL ? 1 : 0) : 1,
        },
      ],
    };
  }
}
    
case"Incremant_SQuantatity":

const {id}=action.payload
return{
  ...state,
  cart:state.cart.map((item)=>item.id==id?
  {...item,squantatity:item.squantatity+1}:item
)
  
}
case"Decremant_SQuantatity":

return{
  ...state,
  cart:state.cart.map((item)=>item.id==action.payload.id?
  {...item,squantatity:item.squantatity-1}:item
)
  
}
case"Incremant_MQuantatity":
return{
  ...state,
  cart:state.cart.map((item)=>item.id==action.payload.id?
  {...item,mquantatity:item.mquantatity+1}:item
)
  
}
case"Decremant_MQuantatity":
return{
  ...state,
  cart:state.cart.map((item)=>item.id==action.payload.id?
  {...item,mquantatity:item.mquantatity-1}:item
)
  
}
case"Incremant_LQuantatity":
return{
  ...state,
  cart:state.cart.map((item)=>item.id==action.payload.id?
  {...item,lquantatity:item.lquantatity+1}:item
)
  
}
case"Decremant_LQuantatity":
return{
  ...state,
  cart:state.cart.map((item)=>item.id==action.payload.id?
  {...item,lquantatity:item.lquantatity-1}:item
)
  
}
case 'Set_JustNavigated':
      return {
        ...state,
        justNavigated: action.payload,
      };
     case 'totalprice': {
  const total = state.cart.reduce((acc, item) => {
    const sPrice = item.prices.find(p => p.size === 'S' || p.size === '250gm')?.price || 0;
    const mPrice = item.prices.find(p => p.size === 'M' || p.size === '500gm')?.price || 0;
    const lPrice = item.prices.find(p => p.size === 'L' || p.size === '1Kg')?.price || 0;

    const itemTotal =
      sPrice * (item.squantatity || 0) +
      mPrice * (item.mquantatity || 0) +
      lPrice * (item.lquantatity || 0);

    return acc + itemTotal;
  }, 0);

  return {
    ...state,
    TotalPrice: total,
  };
}
case "Order_History":return{
  ...state,
  orderhistory:[...state.orderhistory,action.payload]
}
case "Clear_Cart":
  return {
    ...state,
    cart: [],
    TotalPrice: 0,
  };
  }
  

}