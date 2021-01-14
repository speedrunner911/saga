import React from 'react'
import { Provider } from 'react-redux'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './App.css' // temp

import Head from './components/Head'
import ListOrders from './components/OrdersList'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

const { Content, Header } = Layout
const store = configureStore()
store.runSaga(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <Layout style={{height:"100vh"}}>
        <Header style={{backgroundColor: '#ccc'}}>
          <Head />
        </Header>
        <Content style={{padding: '45px'}}>
          <ListOrders />
        </Content>
      </Layout>
    </Provider>
  )
}

export default App
