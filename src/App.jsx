import React from 'react'
import 'antd/dist/antd.css'
import './App.css' // temp

import Head from './components/Head'
import ListOrders from './components/OrdersList'
import { Layout } from 'antd'
const { Content, Header } = Layout

function App() {
  return (
    <div>
      <Layout style={{height:"100vh"}}>
        <Header style={{backgroundColor: '#ccc'}}>
          <Head />
        </Header>
        <Content style={{padding: '45px'}}>
          <ListOrders />
        </Content>
      </Layout>
    </div>
  )
}

export default App
