import { createSlice } from '@reduxjs/toolkit';

const initialCartValue = {
  showCart: false,
  cartItems: [],
  isChanged : false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartValue,
  reducers: {
    addItem(state, action) {
      const item = {
        name: action.payload.title,
        price: action.payload.price,
        amount: 1,
        id: action.payload.id,
      };
      let itemIsListed = false;

      state.isChanged = true

      for (let i of state.cartItems) {
        if (i.id === item.id) {
          itemIsListed = true;
        }
      }

      if (!itemIsListed) {
        state.cartItems.push(item);
      } else {
        state.cartItems = state.cartItems.map((element) => {
          if (element.id === item.id) {
            return {
              ...element,
              amount: element.amount + 1,
            };
          } else {
            return element;
          }
        });
      }
      // state.cartItems.push(action.payload);
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    replaceCart(state,action) {
      state.cartItems = action.payload
    },
    remove(state, action) {
      state.isChanged = true
      state.cartItems.forEach((item, index) => {
        if (item.id === action.payload) {
          if (item.amount > 1) {
            state.cartItems[index].amount -= 1;
          } else {
            state.cartItems.splice(index, 1);
          }
        }
      });
    },
  },
});



export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
