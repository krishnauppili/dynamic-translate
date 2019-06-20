import React,{Component} from 'react';
import '../src/styles/main.css';
import Main from "./views/main";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./store/sagas";
import RootReducer from "./store/reducers";

/* Initialize Saga middleware */
const sagaMiddleware = createSagaMiddleware();

/* Initialize store with Root Reducer and Saga middleware*/

const store = createStore(RootReducer,applyMiddleware(sagaMiddleware));

/* Running Root Saga */
sagaMiddleware.run(RootSaga);


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Main/>
                </div>
            </Provider>
        );
    }
}
export default App;