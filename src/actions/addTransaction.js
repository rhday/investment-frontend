export default function addTransaction (transaction, accountId) {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions`, {
            method:'POST',
            headers: {
               'Content-Type': 'application/json' 
            },
            body: JSON.stringify(transaction)
        })
        .then(res => res.json())
        .then(account => dispatch({type: 'ADD_TRANSACTION', payload: account}))
    }
}

//.then(account => {
    //if (account.error){
    //    alert(account.error)
    //} else{
    //    dispatch({type: 'ADD_TRANSACTION', payload: account})
   // }
//})

