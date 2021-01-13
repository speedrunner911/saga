import React from 'react'
import { Input } from 'antd'

const Head = () => {
  return (
    <div className='header'>
      <h2>ORDERS</h2>
      <h2 style={{marginLeft: '80px'}}>Filter:</h2>
      <Input placeholder="Order name" />
    </div>
  )
}

export default Head
