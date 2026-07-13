import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";
import ButtonPage from "./ButtonPage";
import PageButtons from "./PageButtons";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagination({
    handlers= {},
    disabled={},
    windowSize=8,
    pageNumber=5
}) {
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1; 
    const [buttonPointer, setButtonPointer] = useState(0);
    const [buttonNumbers, setButtonNumbers] = useState(3);
    const {prev: prevPageHandler, next: nextPageHandler, goToPage: goToPageHandler} = handlers;
    const {prev: prevDisabled, next: nextDisabled} = disabled;
    const prevButtonPointerHandler = () => {
        setButtonPointer(prevPointer => Math.max(0, prevPointer-1))
    }
    const nextButtonPointerHandler = () => {
        setButtonPointer(prevPointer => Math.min(prevPointer+1, pageNumber-1));
    }
    const pageButtonPointerHandler = (index) => {
        setButtonPointer(index)
    }
    useEffect(() => {
        if(currentPage > pageNumber) {
            setButtonPointer(0);
        } else {
            setButtonPointer(currentPage - 1);
        }
    }, [currentPage, pageNumber])
   useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 350) {
            setButtonNumbers(1);
            } else if (width < 400) {
            setButtonNumbers(2);
            } else {
            setButtonNumbers(3);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="flex gap-2 w-full justify-center">
            <ButtonPrev 
                isDisabled={prevDisabled} 
                prevHandlers={[prevPageHandler, prevButtonPointerHandler]}
            />
            <PageButtons 
                buttonNumber={buttonNumbers}
                displayLastPageButton
                windowSize={windowSize}
                pageNumber={pageNumber}
                buttonPointer={buttonPointer}
                goToPageHandler={goToPageHandler}
                pageButtonPointerHandler={pageButtonPointerHandler}
            />
            <ButtonNext 
                isDisabled={nextDisabled} 
                nextHandlers={[nextPageHandler, nextButtonPointerHandler]}
            />
        </div>
    )
}