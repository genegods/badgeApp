import {FETCH_COUNT} from './add.actionTypes'

let fetchCount = () =>{
    return{
        type: FETCH_COUNT,
        payload: 'increment'
    }
}



export {fetchCount}