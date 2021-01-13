import React from 'react'
import moment from 'moment'

import { Collapse } from 'antd'
const { Panel } = Collapse

const OrdersList = () => {
  const ordersData = [{
    number: 1,
    date: Date.now(),
    name: "Car",
    comment: "Some comment1",
  },{
    number: 2,
    date: Date.now(),
    name: "Bike",
    comment: "Some comment2",
  }, {
    number: 3,
    date: Date.now(),
    name: "Moto",
    comment: "Some comment3",
  }]
  const callback = (key) => {
    if (!key) return // dont need to make call
    // make call and load data
    console.log("Load data")
  }
  return (
    <Collapse accordion onChange={callback} defaultActiveKey={['1']}>
      {ordersData.map(({number, date, comment}) => (
        <Panel header={`${number}, ${moment(date).format('DD:MM:YY')}, ${comment}`} key={number}>
          <div className="orderData">
            <p>{`${number}, ${moment(date).format('DD:MM:YY')}, ${comment}`}</p>
          </div>
        </Panel>
      ))}
    </Collapse>

  )
}

export default OrdersList
