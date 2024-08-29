import api from '../../api.js'

export const authenticateUser = async (credentials) => {
    try {
        const res = await api.post('/user/login', credentials)
        console.log(res)
        return res.data
    } catch (error) {
        console.error('Authentication failed: ', error)
        throw error
    }
}

export const getUserFromToken = async () => {
    // try {
    //     const res = await api.get('/user/me')
    //     return res.data.user
    // } catch (error) {
    //     console.error('An error has ocurred while obtaining your token: ', error)
    //     return null
    // }
}

export const logoutUser = async () => {
    try {
        return await api.post('user/logout')
    } catch (error) {
        console.error('We could not close your session.')
    }
}