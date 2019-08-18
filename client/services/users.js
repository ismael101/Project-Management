import axios from 'axios'

export default{
    login(credentials){
        return axios.post('/users/login',credentials).then(response => {
            return response.data
        })

    },
    getTeam({teamid,token}){
        return axios.get(`/users/team/${teamid}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        }).then(response => {
            return response.data
        })
    }

}