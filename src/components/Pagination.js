import { useCallback, useEffect, useState } from 'react';


const Pagination = ({onPageChange}) => {

    const totalPage = 15;
    const maxVisiblePageCount = 10;

    const [pages, setPage] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const getPages = useCallback((totalPage, maxVisiblePageCount, activePage) => {
        const maxResultSize = totalPage > maxVisiblePageCount ? maxVisiblePageCount:totalPage;
        const startingPage = activePage + maxResultSize > totalPage ? totalPage - maxResultSize +1 : activePage;
        return [...Array(maxResultSize)].map((_,idx)=>{
            return startingPage + idx;
        })
    }, []);
  
    const changePage= useCallback((e) =>{
        let selectedPage = 0;
        if(e.target.dataset.id === "PREV"){
            selectedPage = activePage-1
        }else if(e.target.dataset.id === "NEXT"){
            selectedPage = activePage+1
        }else{
            selectedPage = Number(e.target.dataset.id);
        }
        // const selectedPage = Number(e.target.dataset.id);
        setActivePage(selectedPage);
        onPageChange(selectedPage);
    },[activePage]);

    useEffect(()=>{
        const newPages = getPages(totalPage, maxVisiblePageCount, activePage);
        setPage(newPages);
    },[activePage]);

    return (
         <div className="pagination">
         <button className="page-button" data-id={"PREV"} onClick={changePage} disabled={activePage === 1}>Prev</button>
         {
                pages.map((page)=>(
                    <button className={`page-button ${activePage == page ? 'active' : ''}`} data-id={page} onClick={changePage}>{page}</button>
                ))
         }
         <button className="page-button" data-id={"NEXT"} onClick={changePage} disabled={activePage === totalPage}>Next</button>
         </div>
    )
}

export default Pagination;