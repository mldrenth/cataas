import React from "react";
import ICatData from "../types/Cat";

interface Props {
    cat: ICatData
}

const CatDisplay: React.FC<Props> = ({cat}) => {

    return (
        <>
        <img src={`https://cataas.com/c/${cat._id}`} alt="cat"></img>
        </>
    )
}

export default CatDisplay