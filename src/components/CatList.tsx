import React, { MouseEventHandler } from "react";
import ICatData from "../types/Cat";
import CatItem from "../components/CatItem"

interface Props {
    cats: ICatData[]
    handleCatSelect: (cat: ICatData) => void
}

const CatList: React.FC<Props> = ({cats, handleCatSelect}) => {

    const catListItems = cats.map((cat, index) => {
    return <CatItem  cat={cat} key={index} handleCatSelect={handleCatSelect}/>
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>{catListItems}</tbody>
            </table>
        </div>
    )
}

export default CatList;