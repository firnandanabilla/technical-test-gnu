import { combineReducers } from 'redux'
import ThemeOptions from '../../reducers/ThemeOptions';
import crudReducer from './crudReducer'
const reducer = combineReducers({
    ThemeOptions,
    crudReducer
})
export default reducer