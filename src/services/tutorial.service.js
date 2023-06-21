import http from "../http-common";
import axios from "axios";

class TutorialDataService{
    getAll(){
        console.log('getALL')
        axios({
            method: 'get',
            url:`https://us-central1-supportapp-390409.cloudfunctions.net/tutorialapi/getTutorials`
        })
        //return http.get("/getTutorials")
        
    }

    get(id){
        axios({
            method: 'get',
            url:`https://us-central1-supportapp-390409.cloudfunctions.net/tutorialapi/getTutorials/${id}`
        })
        //return http.get(`/getTutorials/${id}`)
    }

    create(data){
        return http.post("/tutorials", data)
    }

    update(id, data){
        return http.put(`/tutorials/${id}`, data)
    }

    delete(id){
        return http.delete(`/tutorials/${id}`)
    }

    deleteAll(){
        return http.delete(`/tutorials`)

    }

    findByTitle(title){
        return http.get(`/tutorials?title=${title}`)
    }
}

export default new TutorialDataService();