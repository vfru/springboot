import { legacy_createStore as createStore, combineReducers } from 'redux'
import { TotalPriceReducer } from './reducers/TotalPriceReducer'
import {LoadingReducer} from './reducers/LoadingReducer'

// 以后可能还有reducer，先合并reducer

const reducer = combineReducers(
    {
        TotalPriceReducer,
        LoadingReducer,
    }
)

const store = createStore(reducer)




export default store