//action creator creates an object which is passed to dispatch
export function fetchAccounts(userId) {

    return (dispatch) => {
        //debugger
        fetch(`http://localhost:3000/api/v2/accounts`)
        .then(res => res.json())
        .then(accounts => dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: accounts
        }));
    };

};

//fetch('http://localhost:3000/api/v1/accounts')
//.then(res => res.json())
//.then(data => console.log(data))