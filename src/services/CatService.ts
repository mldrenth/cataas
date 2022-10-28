import http from "../https-common";
import ICatData from "../types/Cat"

const getAllCuteCats = () => {
    return http.get<Array<ICatData>>("/cats?tags=cute")
}

const CatService = {
    getAllCuteCats
}

export default CatService;