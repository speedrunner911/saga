import React from 'react'
import { Input } from 'antd'
// import { useDispatch } from 'react-redux'

const Head = () => {
  // const dispatch = useDispatch()
  
  return (
    <div className='header'>
      <h2>ORDERS</h2>
      <h2 style={{marginLeft: '80px'}}>Filter:</h2>
      <Input placeholder="Order name" />
      {/* <Button onClick={() => dispatch(fetchOrders())}>Filter</Button> */}
    </div>
  )
}

export default Head
