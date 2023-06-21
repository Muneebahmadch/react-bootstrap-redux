import axios from "axios"

import React from 'react'

export default axios.create({
    baseURL: "https://us-central1-supportapp-390409.cloudfunctions.net/tutorialapi",
    headers: {"Access-Control-Allow-Origin": true},
    
})

//export default axios.create("https://us-central1-supportapp-390409.cloudfunctions.net/tutorialapi",{ crossDomain: true } )

//https://us-central1-supportapp-390409.cloudfunctions.net/tutorialapi/getTutorials
//http://localhost:8080/api