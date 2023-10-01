import { useEffect } from 'react';


import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import Products from './components/Shop/Products';
import {uiActions} from "./store/ui-slice"
import Notification from "./components/UI/Notification"
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector(state => state.cart.cartItems)
  const cartChanged = useSelector(state => state.cart.isChanged)
  const notification = useSelector(state => state.ui.notification)


  useEffect(() => {
    dispatch(fetchCartData())
    console.log(cart)
  }, [dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false
      return
    }

    if(cartChanged) {
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch])

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
