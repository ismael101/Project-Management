import axios from 'axios'

export default{
    get_all_projects(credentials){
        axios.get(`/personal/${credentials.teamid}`,{
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
        axios.get(`/personal/${credentials.id}`,{
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
        axios.post(`/personal/${credentials.id}`,project,{
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
    update_project(credentials){
        axios.patch(`/personal/${credentials.id}`,{
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
        axios.delete(`/personal/${credentials.id}`,{
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