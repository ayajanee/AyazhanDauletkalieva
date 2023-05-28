import React from "react";
import ReactDOM, { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import './css/styless.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {APIProvider} from "./compontents/context/APIContext";


const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//     <React.StrictMode>
//         <APIProvider>
//             <App />
//         </APIProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Provider store={store}>
        <APIProvider>
            <App />
        </APIProvider>
    </Provider>,
    document.getElementById('root')
);
