import axios from 'axios'

export default{
    login(credentials){
        return axios.post('/users/login',credentials).then(response => {
            return response.data
        })

    },
}