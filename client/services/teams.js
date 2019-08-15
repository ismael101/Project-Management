import axios from 'axios'

export default{
    get_all_projects(credentials){
        axios.get(`/teams/${credentials.teamid}`,{
            headers:{
                Bearer:credentials.token
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    },
    get_specific_project(credentials){
        axios.get(`/teams/${credentials.id}`,{
            headers:{
                Bearer:credentials.token
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    },
    create_project(credentials,project){
        axios.post(`/teams/${credentials.id}`,project,{
            headers:{
                Bearer:credentials.token
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    },
    update_project(credentials,project){
        axios.patch(`/teams/${credentials.id}`,project,{
            headers:{
                Bearer:credentials.token
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    },
    delete_project(credentials){
        axios.delete(`/teams/${credentials.id}`,{
            headers:{
                Bearer:credentials.token
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    }
}