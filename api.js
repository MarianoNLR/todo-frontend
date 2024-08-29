import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})

api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (!user) return config
        if (user.token) {
            config.headers['authorization'] = `Bearer ${user.token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default api