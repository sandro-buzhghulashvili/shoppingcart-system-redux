import { uiActions } from "./ui-slice"
import { cartActions } from "./cart"


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchRequest = async () => {
            const response = await fetch("https://react-http-b5266-default-rtdb.firebaseio.com/cart.json")
            if(!response.ok) {
                throw new Error("Fetching cart data failed")
            }
            const data = await response.json()

            return data
        }

        try {
            const cartData = await fetchRequest()

            if(cartData) {
                dispatch(cartActions.replaceCart(cartData))
            }
        } catch (e) {
            dispatch(uiActions.showNotification({
                status : 'error',
                title : 'Error',
                message : 'Fetching data failed'
              }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(uiActions.showNotification({
        status : 'pending',
        title : 'Sending ...',
        message : 'Sending cart data!'
      }))
  
      const sendRequest = async () => {
        const response = await fetch('https://react-http-b5266-default-rtdb.firebaseio.com/cart.json', {
          method : 'PUT',
          body : JSON.stringify(cart)
        })
  
        if(!response.ok) {
          throw new Error("Sending cart data failed")
        }
      }
  
      try {
        await sendRequest()
  
        dispatch(uiActions.showNotification({
          status : 'success',
          title : 'Success',
          message : 'Sent cart data successfully'
        }))
      } catch(e) {
  
        dispatch(uiActions.showNotification({
          status : 'error',
          title : 'Error',
          message : 'Sending car data failed'
        }))
      }
    }
  }