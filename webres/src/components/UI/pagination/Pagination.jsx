import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
            <ul className="pagination d-flex align-items-center justify-content-center">
                {pagesArray.map(p =>
                    <li className="page-item">
                        <a onClick={() => changePage(p)}
                           key={p}
                           className={page === p ? 'page-item page-item__current' : 'page-item'}>
                            {p}
                        </a>
                    </li>
                )}
            </ul>

    );
};

export default Pagination;
