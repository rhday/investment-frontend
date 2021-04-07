

//pass in default state as an empty object with an empty array of 'accounts' inside and the action.
export default function accountReducer(state = [], action){
    switch (action.type){
        case 'FETCH_ACCOUNTS':
            //debugger
            return action.payload
        case "ADD_ACCOUNT":
            return [...state, action.payload]
        case 'ADD_TRANSACTION':
            let accounts = state.map(account => {
                if (account.id === action.payload.id){
                    return action.payload
                } else {
                    return account
                }
            })
            return accounts
        case 'DELETE_TRANSACTION':
            //debugger
            let deleted = state.map(account => {
                if (account.id === action.payload.id){
                    return action.payload
                } else {
                    return account
                }
            })
            return deleted
        default:
            return state
    }
    

}
