// import { createStore, combineReducers } from 'redux';
// import reducers from '../reducers';
//
// export default function configureStore() {
//   return createStore(
//     combineReducers({
//       ...reducers
//     }),
//     {},
//   );
// }

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducer';

const initialState = {};
const middleware = [thunk]

const configureStore = () => {
    return createStore(
        reducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );
}

export default configureStore;