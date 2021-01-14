import React, { useEffect } from 'react'
import moment from 'moment'
import { Collapse } from 'antd'
import { useSelector, useDispatch } from "react-redux"
import { fetchAllOrders } from '../actions'

const { Panel } = Collapse


const OrdersList = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders)
  console.log(orders)
  useEffect(() => {
    dispatch(fetchAllOrders())
  }, [])
  const callback = (key) => {
    if (!key) return // dont need to make call
    // make call and load data
    console.log("Load data")
  }

  return (
    <Collapse accordion onChange={callback} defaultActiveKey={['1']}>
      {orders.length > 0 ? (
        orders.map(({id, docDate, docNum}) => (
          <Panel header={`${id}, ${moment(docDate).format('DD:MM:YY')}, ${docNum}`} key={docNum}>
            <div className="orderData">
              <p>{`${id}, ${moment(docDate).format('DD:MM:YY')}, ${docNum}`}</p>
            </div>
          </Panel>
        ))
      ) : <p>Loading...</p>}
    </Collapse>

  )
}

export default OrdersList
