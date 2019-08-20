import axios from 'axios'

export default{
    getAllProjects({teamid,token}){
        return axios.get(`/teams/${teamid}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })
    },
    getSpecificProject({id, token}){
        return axios.get(`/teams/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })
    },
    createProject({id,token},project){
        return axios.post(`/teams/${id}`,project,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })
    },
    updateProject({id,token},project){
        return axios.patch(`/teams/${id}`,project,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })

    },
    deleteProject({id,token}){
        return axios.delete(`/teams/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res => {
            return res.data
        })
    }
}