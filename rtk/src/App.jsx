import "./App.css";
import { Data } from "./components/Data.jsx";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./features/apiSlice";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Data />
        </div>
    </Provider>
  );
}

export default App;