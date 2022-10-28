import React from "react";
import ICatData from "../types/Cat";


const CatItem: React.FC<{cat: ICatData, key: number}> = ({cat, key}): JSX.Element => {
    
    return (
        <>
            <tr>
                <td>{cat._id}</td>
                <td>{cat.owner}</td>
            </tr>
        </>
    )
}

export default CatItem;