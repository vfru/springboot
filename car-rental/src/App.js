import React from 'react'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'//供应商
import store from './redux/store'


export default function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}
