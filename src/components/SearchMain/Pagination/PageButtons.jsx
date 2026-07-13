// import { MoreHorizontalIcon } from "lucide-react";
// import ButtonPage from "./ButtonPage";
// import ButtonWindow from "./ButtonWindow";

// export default function PageButtons({
//     pageNumber=10,
//     buttonPointer=0,
//     displayLastPageButton=true,
//     buttonNumber=3,
//     windowSize=8,
//     windowStartIndexHandler=() => {},
//     pageButtonPointerHandler=() => {}
// }) {
//     const isLastButtonNeeded = displayLastPageButton && (pageNumber > buttonNumber);
//     const buttonsToDisplay = Math.min(buttonNumber, pageNumber);
//     const isMoreIconNeeded = pageNumber > buttonNumber+1

//     return (
//         <div className="flex gap-2 items-center">
//             <ButtonWindow
//                 pageNumber={pageNumber}
//                 windowSize={windowSize}
//                 buttonPointer={buttonPointer}
//                 buttonWindowSize={buttonsToDisplay}
//                 windowStartIndexHandler={windowStartIndexHandler}
//                 pageButtonPointerHandler={pageButtonPointerHandler}
//             />
//             {isLastButtonNeeded && 
//                 <>
//                     {isMoreIconNeeded && <MoreHorizontalIcon className=""/>}
//                     <ButtonPage
//                         isActive={buttonPointer === pageNumber-1}
//                         number={pageNumber}
//                         handler={[
//                             () => windowStartIndexHandler((pageNumber-1) * windowSize),
//                             () => pageButtonPointerHandler(pageNumber-1)
//                         ]}
//                     />
//                 </> 
//             }
//         </div>
//     )
// }

import { MoreHorizontalIcon } from "lucide-react";
import ButtonPage from "./ButtonPage";
import ButtonWindow from "./ButtonWindow";

export default function PageButtons({
    pageNumber = 10,
    buttonPointer = 0,
    displayLastPageButton = true,
    buttonNumber = 3,
    windowSize = 8,
    goToPageHandler = () => {},
    pageButtonPointerHandler = () => {}
}) {
    const isLastButtonNeeded = displayLastPageButton && (pageNumber > buttonNumber);
    const buttonsToDisplay = Math.min(buttonNumber, pageNumber);
    const isMoreIconNeeded = pageNumber > buttonNumber + 1;

    return (
        <div className="flex gap-2 items-center">
            <ButtonWindow
                pageNumber={pageNumber}
                windowSize={windowSize}
                buttonPointer={buttonPointer}
                buttonWindowSize={buttonsToDisplay}
                excludeLastButton={isLastButtonNeeded}
                goToPageHandler={goToPageHandler}
                pageButtonPointerHandler={pageButtonPointerHandler}
            />
            {isLastButtonNeeded && (
                <>
                    {isMoreIconNeeded && <MoreHorizontalIcon className="" />}
                    <ButtonPage
                        isActive={buttonPointer === pageNumber - 1}
                        number={pageNumber}
                        handler={[
                            () => goToPageHandler(pageNumber),
                            () => pageButtonPointerHandler(pageNumber - 1),
                        ]}
                    />
                </>
            )}
        </div>
    );
}