import React, { useState } from "react";
import style from "./Paginator.module.css"

type Props = {
    totalItemsCount: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void
    currentPage: number
    portionSize?: number
}

export const Paginator: React.FC<Props> = ({ totalItemsCount, pageSize, setCurrentPage, currentPage, portionSize = 10 }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(item => {
                    return (<span key={item}
                        onClick={() => { setCurrentPage(item) }}
                        className={item === currentPage ? style.selected : ''}
                    >{item}</span>)
                })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>
            }
        </div>
    )
}
