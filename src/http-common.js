import axios from "axios"

import React from 'react'

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "applicartion/json"
    }
})
