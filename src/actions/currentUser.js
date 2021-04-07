export const setCurrentUser = user => {
    return {
        type:"SET_CURRENT_USER",
        user
    }
}

export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v2/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
    }
}