import React, { MouseEventHandler } from "react";
import ICatData from "../types/Cat";

interface Props {
    cat: ICatData,
    key: number,
    handleCatSelect: (cat: ICatData) => void
}

const CatItem: React.FC<Props> = ({ cat, key, handleCatSelect }): JSX.Element => {



    return (
        <>
            <tr>
                <td>{cat._id}</td>
                <td>{cat.owner}</td>
                <td><button onClick={() => handleCatSelect(cat)}>Select cat</button></td>
            </tr>
        </>
    )
}

export default CatItem;