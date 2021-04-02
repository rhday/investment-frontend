

//pass in default state as an empty object with an empty array of 'accounts' inside and the action.
export default function accountReducer(state = {accounts: []}, action){
    //debugger
    switch (action.type){
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        case "ADD_ACCOUNT":
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADD_TRANSACTION':
            let accounts = state.accounts.map(account => {
                if (account.id === action.payload.id){
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accounts}
        case 'DELETE_TRANSACTION':
            let deleted = state.accounts.map(account => {
                if (account.id === action.payload.id){
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: deleted}
        default:
            return state
    }
    

}
