import { useEffect, useState } from 'react';

const getPages = (totalPage, maxVisiblePageCount, activePage) => {
    const maxResultSize = totalPage > maxVisiblePageCount ? maxVisiblePageCount:totalPage;
    const startingPage = activePage + maxResultSize > totalPage ? totalPage - maxResultSize +1 : activePage;
    return [...Array(maxResultSize)].map((_,idx)=>{
        return startingPage + idx;
    });
}

const Pagination = ({onPageChange}) => {

    const totalPage = 15;
    const maxVisiblePageCount = 10;

    const [pages, setPage] = useState([]);
    const [activePage, setActivePage] = useState(1);

  
    const changePage= function(e){
        const selectedPage = Number(e.target.dataset.id);
        setActivePage(selectedPage);
        onPageChange(selectedPage);
    }

    useEffect(()=>{
        const newPages = getPages(totalPage, maxVisiblePageCount, activePage);
        setPage(newPages);
    },[activePage]);

    return (
         <div className="pagination">
         <div className="page-button" data-id={"PREV"} onClick={changePage}>Prev</div>
         {
                pages.map((page)=>(
                    <div className={`page-button ${activePage == page ? 'active' : ''}`} data-id={page} onClick={changePage}>{page}</div>
                ))
         }
         <div className="page-button" data-id={"NEXT"} onClick={changePage}>Next</div>
         </div>
    )
}

export default Pagination;