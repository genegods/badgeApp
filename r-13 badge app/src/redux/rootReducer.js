import {addReducer, COUNT_KEY} from './weatherRedux/add.reducer'
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    countStore : addReducer
})

export {rootReducer}