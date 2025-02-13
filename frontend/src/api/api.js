export const getUserInformation = async (userId) => {
    return fetch("http://localhost:3000/user/" + userId, {
        method: 'GET'
    })
        .then(res => {
            if(!res.ok) {
                throw res
            }
            return res.json()
        })
        .then(res => res.data)
}

export const getUserActivity = async (userId) => {
    return fetch(`http://localhost:3000/user/${ userId }/activity`, {
        method: 'GET'
    })
        .then(res => {
            if(!res.ok) {
                return res.json().then(err => {
                    throw new Error(err)
                })
            }
            return res.json()
        })
        .then(res => res.data)
}

export const getUserAverageSessions = async (userId) => {
    return fetch(`http://localhost:3000/user/${ userId }/average-sessions`, {
        method: 'GET'
    })
        .then(res => {
            if(!res.ok) {
                return res.json().then(err => {
                    throw new Error(err)
                })
            }
            return res.json()
        })
        .then(res => res.data)
}

export const getUserPerformance = async (userId) => {
    return fetch(`http://localhost:3000/user/${ userId }/performance`, {
        method: 'GET'
    })
        .then(res => {
            if(!res.ok) {
                return res.json().then(err => {
                    throw new Error(err)
                })
            }
            return res.json()
        })
        .then(res => res.data)
}