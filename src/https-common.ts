import axios from "axios";

export default axios.create({
    baseURL: "https://cataas.com/",
    headers: {
        "Content-type": "application.json"
    }
})