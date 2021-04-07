export const addAccount = (data) => {
    //debugger
    return(dispatch) => {
        fetch('http://localhost:3000/api/v2/users/accounts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(account => dispatch({type: 'ADD_ACCOUNT', payload: account}))


    }
}