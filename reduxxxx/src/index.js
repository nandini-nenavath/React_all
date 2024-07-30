import React from 'react'
import ReactDOM from 'react-dom/client'
import OrgCardsList from './App.js'
import './index.css'
import { Provider } from "react-redux";
import { store } from './Store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}> 
     <OrgCardsList />
  </Provider>,
)
