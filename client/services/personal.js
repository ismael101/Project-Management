import axios from 'axios'

export default{
    getAllProjects({userid,token}){
        return axios.get(`/personal/${userid}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })
    },
    getSpecificProject(credentials){
        return axios.get(`/personal/${credentials.id}`,{
            headers:{
                Bearer:credentials.token
            }
        })
    },
    createProject({id, token},project){
        return axios.post(`/personal/${id}`,project,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })
    },
    updateProject({id,token}, project){
        return axios.patch(`/personal/${id}`,project,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })
    },
    deleteProject({id, token}){
        return axios.delete(`/personal/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then(res => {
            return res.data
        })
    }
}