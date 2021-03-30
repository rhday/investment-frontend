

//pass in default state as an empty object with an empty array of 'accounts' inside and the action.
export default function accountReducer(state = {accounts: []}, action){
    //debugger
    switch (action.type){
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        default:
            return state
    }
    

}