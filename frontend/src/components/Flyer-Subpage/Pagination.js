import React from 'react';
import "./styles.css";
const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='pagination space-x-7 content-center'>
            {pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)}
                    className={page == currentPage ? 'active' : ''}>
                    {page}
                </button>
            })}

        </div>

    )
}

export default Pagination


