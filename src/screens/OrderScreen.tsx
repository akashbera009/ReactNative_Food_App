import React from 'react'

// custom component import 
import OrderPage from '../components/OrderSection/OrderPage';


const OrderScreen = ({ route }: OrderScreen) => {
  return (
    <OrderPage route={route} />
  )
}

export default OrderScreen