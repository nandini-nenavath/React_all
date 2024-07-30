import React from 'react'
import ReactDOM from 'react-dom/client'
import OrgCardsList from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { store } from './Store/store.js';
import App from './routes.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}> 
     <App/>
  </Provider>,
)
