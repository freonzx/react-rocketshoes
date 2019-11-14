import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import history from './services/history'

import './config/ReactotronConfig'

import GlobalStyle from './styles/global'
import Header from './components/Header'
import store from './store'

import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  )
}

export default App
