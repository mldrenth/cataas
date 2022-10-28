import axios from "axios";

export default axios.create({
    baseURL: "https://cataas.com/api",
    headers: {
        "Content-type": "application.json"
    }
})