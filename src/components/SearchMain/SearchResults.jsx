import { useContext, useState, useMemo, useEffect, useCallback } from "react"
import FilterContext from "../../context/FilterContext"
import Pagination from "./Pagination/Pagination"
import ResultGrid from "./ResultGrid"
import { useLocation, useSearchParams } from "react-router-dom";
import useGridColumns from "../../hooks/useGridColumns";

export default function SearchResults({
    label="",
    rowsPerPage=2,
}) {
    const { searchResults } = useContext(FilterContext);
    const [gridRef, columns] = useGridColumns();
    const number = rowsPerPage * columns;
    const location = useLocation();
    //For Pagination
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page") ?? "1", 10);

    const windowStartIndex = (page - 1) * number;

    const resultWindow = useMemo(() => {
        return searchResults.slice(windowStartIndex, windowStartIndex + number);
    }, [searchResults, windowStartIndex, number]);
    const pageNo = Math.ceil(searchResults.length / number);
    
    useEffect(() => {
        if(!searchParams.get("page")) {
            const current = Object.fromEntries(searchParams.entries())
            setSearchParams({...current, page : 1})
        }
    }, [searchParams, setSearchParams])
    useEffect(() => {
        if(page > pageNo && pageNo > 0) {
            const current = Object.fromEntries(searchParams.entries());
            setSearchParams({...current, page: 1});
        }
    }, [searchResults, page, pageNo, searchParams, setSearchParams])
    
    const nextPageHandler = useCallback(() => {
        const current = Object.fromEntries(searchParams.entries());
        if(page < pageNo) setSearchParams({...current, page: page+1});
    }, [setSearchParams, page, pageNo, searchParams])

    const prevPageHandler = useCallback(() => {
        const current = Object.fromEntries(searchParams.entries());
        if(page > 1) setSearchParams({...current, page : page - 1})
    }, [page, setSearchParams, searchParams])

    const goToPageHandler = useCallback((page) => {
        const current = Object.fromEntries(searchParams.entries());
        setSearchParams({ ...current, page })
    }, [setSearchParams, searchParams])

    const paginationDisabled = {
        prev: page === 1,
        next: page === pageNo
    }
    const handlers = {
        prev: prevPageHandler,
        next: nextPageHandler,
        goToPage: goToPageHandler
    }
    
    return (
        <div 
            className="w-full h-fit p-4 pt-0 flex flex-col gap-10 items-center justify-center"
        >
            {label && 
                <h2 className="text-2xl font-semibold text-gray-500">
                {`${label}: 
                    ${searchResults.length > 0?
                        `${searchResults.length} result${searchResults.length >1? `s`:``}`
                    :
                    ``}
                `}
                </h2>
            }     
            <ResultGrid ref={gridRef} resultWindow={resultWindow} number={number}/>
            <Pagination
                pageNumber={pageNo}
                windowSize={number}
                handlers={handlers}
                disabled={paginationDisabled}
            />
        </div>
    )
}