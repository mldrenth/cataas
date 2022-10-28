import React from "react";
import ICatData from "../types/Cat";
import CatItem from "../components/CatItem"

interface Props {
    cats: ICatData[]
}

const CatList: React.FC<Props> = ({cats}) => {

    const catListItems = cats.map((cat, index) => {
    return <CatItem  cat={cat} key={index}/>
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