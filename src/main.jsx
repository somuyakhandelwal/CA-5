import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ Store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)
