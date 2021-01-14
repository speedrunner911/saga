import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { fetchAllOrders, fetchFilteredOrders } from '../actions'

const Head = () => {
  const dispatch = useDispatch()
  const [orderInput, setOrderInput] = useState('')

  useEffect(() => {
    if (orderInput) {
      dispatch(fetchFilteredOrders(orderInput))
      return
    }
    dispatch(fetchAllOrders())
  }, [orderInput])

  return (
    <div className='header'>
      <h2>ORDERS</h2>
      <h2 style={{marginLeft: '80px'}}>Filter:</h2>
      <Input placeholder="Order name" onChange={(e) => setOrderInput(e.target.value)}/>
    </div>
  )
}

export default Head
