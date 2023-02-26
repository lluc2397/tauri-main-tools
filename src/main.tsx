import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="h-screen flex">
        <App />
      </div>
    </Provider>
  </BrowserRouter>
);
