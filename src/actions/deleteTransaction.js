export const deleteTransaction = (transactionId, accountId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v2/users/accounts/${accountId}/transactions/${transactionId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(account => dispatch({type: 'DELETE_TRANSACTION', payload: account}))
    }
}