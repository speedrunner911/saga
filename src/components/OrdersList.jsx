import React, { useEffect } from 'react'
import moment from 'moment'
import { Collapse } from 'antd'
import { useSelector, useDispatch } from "react-redux"
import { fetchAllOrders, fetchOrderById } from '../actions'

const { Panel } = Collapse

const OrdersList = () => {
  const dispatch = useDispatch()
  const orderDetails = useSelector((state) => state.orderDetails)
  const orders = useSelector((state) => state.orders)
  
  
  useEffect(() => {
    dispatch(fetchAllOrders())
  }, [])
  
  const callback = (key) => {
    if (!key) return // dont need to make call
    dispatch(fetchOrderById(key))
  }

  return (
    <Collapse accordion onChange={callback} defaultActiveKey={['1']}>
      {orders.length > 0 ? (
        orders.map(({id, docDate, docNum}) => (
          <Panel header={`${id}, ${moment(docDate).format('DD:MM:YY')}, ${docNum}`} key={id}>
            <div className="orderData">
              {orderDetails.length > 0 ? (
                orderDetails.map(({name, qty, price, sum}) => (
                  <p key={name+sum}>{`${name}, ${qty}, ${price}, ${sum}`}</p>
                ))
              ) : <p>No order details</p>}
            </div>
          </Panel>
        ))
      ) : <p>Loading...</p>}
    </Collapse>

  )
}

export default OrdersList
