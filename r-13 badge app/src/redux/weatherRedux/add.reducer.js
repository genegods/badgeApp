import { fetchAdd } from './add.actions'
import {FETCH_COUNT} from './add.actionTypes'

export const COUNT_KEY = 'countStore'

let initialState = {
    count : 0
    
}

let addReducer = (state = initialState, action) =>{
    let {type, payload} = action

    switch(type){
        case FETCH_COUNT:
            return{
                
                count: state.count + 1
            }

           
                default: return state
    }

}

export {addReducer}