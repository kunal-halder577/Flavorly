// import { useState, useEffect } from "react";
// import ButtonPage from "./ButtonPage";

// export default function ButtonWindow({
//   buttonPointer = 0,
//   pageNumber = 10,
//   buttonWindowSize = 3,
//   windowSize = 8,
//   windowStartIndexHandler = () => {},
//   pageButtonPointerHandler = () => {}
// }) {
//   const [buttonArr, setButtonArr] = useState(() =>
//     Array.from({ length: buttonWindowSize }, (_, i) => i)
//   );

//   useEffect(() => {
//     const isPointerInRangeNext = buttonPointer <= buttonArr[buttonArr.length - 1];
//     const isPointerInRangePrev = buttonPointer >= buttonArr[0];

//     if (!isPointerInRangeNext) {
//       const temp = Array.from({ length: buttonWindowSize }, (_, i) => {
//         return buttonPointer !== pageNumber - 1
//           ? buttonPointer - buttonWindowSize + i + 1
//           : buttonPointer - buttonWindowSize + i;
//       });
//       setButtonArr(temp);
//     }
//     if(!isPointerInRangePrev) {
//       const temp = Array.from({length : buttonWindowSize}, (_, i) => (
//           buttonPointer !== 0
//           ? buttonPointer + i
//           : i
//       ))
//       setButtonArr(temp)
//     }
//   }, [buttonPointer, buttonWindowSize, pageNumber]);

//   return buttonArr.map((val) => (
//     <ButtonPage
//       key={`page:${val}`}
//       isActive={buttonPointer === val}
//       number={val + 1}
//       handler={[
//         () => windowStartIndexHandler(val * windowSize),
//         () => pageButtonPointerHandler(val)
//       ]}
//     />
//   ));
// }
// import { useState, useEffect } from "react";
// import ButtonPage from "./ButtonPage";

// export default function ButtonWindow({
//   buttonPointer = 0,
//   pageNumber = 10,
//   buttonWindowSize = 3,
//   windowSize = 8,
//   excludeLastButton = false,
//   windowStartIndexHandler = () => {},
//   pageButtonPointerHandler = () => {}
// }) {
//   const [startIndex, setStartIndex] = useState(0);

//   const maxPageIndex = excludeLastButton ? pageNumber - 2 : pageNumber - 1;

//   useEffect(() => {
//     // Move window right
//     if (buttonPointer > startIndex + buttonWindowSize - 1) {
//       setStartIndex(buttonPointer - buttonWindowSize + 1);
//     }
//     // Move window left
//     else if (buttonPointer < startIndex) {
//       setStartIndex(buttonPointer);
//     }
//   }, [buttonPointer, buttonWindowSize]);

//   const endIndex = Math.min(startIndex + buttonWindowSize, excludeLastButton ? pageNumber - 1 : pageNumber);
//   const buttons = [];

//   for (let i = startIndex; i < endIndex; i++) {
//     buttons.push(
//       <ButtonPage
//         key={`page:${i}`}
//         isActive={buttonPointer === i}
//         number={i + 1}
//         handler={[
//           () => windowStartIndexHandler(i * windowSize),
//           () => pageButtonPointerHandler(i)
//         ]}
//       />
//     );
//   }

//   return buttons;
// }
// import { useState, useEffect } from "react";
// import ButtonPage from "./ButtonPage";

// export default function ButtonWindow({
//   buttonPointer = 0,
//   pageNumber = 10,
//   buttonWindowSize = 3,
//   windowSize = 8,
//   excludeLastButton = false,
//   windowStartIndexHandler = () => {},
//   pageButtonPointerHandler = () => {}
// }) {
//   const [startIndex, setStartIndex] = useState(0);

//   const lastButtonIndex = pageNumber - 1;
//   const maxIndex = excludeLastButton ? lastButtonIndex - 1 : lastButtonIndex;

//   useEffect(() => {
//     if (buttonPointer > startIndex + buttonWindowSize - 1) {
//       setStartIndex(buttonPointer - buttonWindowSize + 1);
//     } else if (buttonPointer < startIndex) {
//       setStartIndex(buttonPointer);
//     }
//   }, [buttonPointer, buttonWindowSize]);

//   const endIndex = Math.min(startIndex + buttonWindowSize, maxIndex + 1);
//   const buttons = [];

//   for (let i = startIndex; i < endIndex; i++) {
//     buttons.push(
//       <ButtonPage
//         key={`page:${i}`}
//         isActive={buttonPointer === i}
//         number={i + 1}
//         handler={[
//           () => windowStartIndexHandler(i * windowSize),
//           () => pageButtonPointerHandler(i)
//         ]}
//       />
//     );
//   }

//   return buttons;
// }
// import { useState, useEffect } from "react";
// import ButtonPage from "./ButtonPage";

// export default function ButtonWindow({
//   buttonPointer = 0,
//   pageNumber = 10,
//   buttonWindowSize = 3,
//   windowSize = 8,
//   excludeLastButton = false,
//   goToPageHandler = () => {},
//   pageButtonPointerHandler = () => {}
// }) {
//   const [startIndex, setStartIndex] = useState(0);

//   const lastButtonIndex = pageNumber - 1;
//   const maxIndex = excludeLastButton ? lastButtonIndex - 1 : lastButtonIndex;

//   useEffect(() => {
//     let newStart = startIndex;

//     if (buttonPointer > startIndex + buttonWindowSize - 1) {
//       newStart = buttonPointer - buttonWindowSize + 1;
//     } else if (buttonPointer < startIndex) {
//       newStart = buttonPointer;
//     }

//     // clamp window so it never overshoots
//     newStart = Math.min(newStart, Math.max(0, maxIndex - buttonWindowSize + 1));

//     if (newStart !== startIndex) {
//       setStartIndex(newStart);
//     }
//   }, [buttonPointer, buttonWindowSize, maxIndex]);

//   const endIndex = Math.min(startIndex + buttonWindowSize, maxIndex + 1);

//   const buttons = [];
//   for (let i = startIndex; i < endIndex; i++) {
//     buttons.push(
//       <ButtonPage
//         key={`page:${i}`}
//         isActive={buttonPointer === i}
//         number={i + 1}
//         handler={[
//           () => goToPageHandler(i+1),
//           () => pageButtonPointerHandler(i),
//         ]}
//       />
//     );
//   }

//   return buttons;
// }
import { useState, useEffect } from "react";
import ButtonPage from "./ButtonPage";

export default function ButtonWindow({
  buttonPointer = 0,
  pageNumber = 10,
  buttonWindowSize = 3,
  windowSize = 8,
  excludeLastButton = false,
  goToPageHandler = () => {},
  pageButtonPointerHandler = () => {}
}) {
  const [startIndex, setStartIndex] = useState(0);

  const lastButtonIndex = pageNumber - 1;
  const maxIndex = excludeLastButton ? lastButtonIndex - 1 : lastButtonIndex;

  useEffect(() => {
    // compute the "window" where the buttonPointer falls
    let newStart = Math.floor(buttonPointer / buttonWindowSize) * buttonWindowSize;

    // clamp so window never overshoots maxIndex
    newStart = Math.min(newStart, Math.max(0, maxIndex - buttonWindowSize + 1));

    if (newStart !== startIndex) {
      setStartIndex(newStart);
    }
  }, [buttonPointer, buttonWindowSize, maxIndex]);

  const endIndex = Math.min(startIndex + buttonWindowSize, maxIndex + 1);

  const buttons = [];
  for (let i = startIndex; i < endIndex; i++) {
    buttons.push(
      <ButtonPage
        key={`page:${i}`}
        isActive={buttonPointer === i}
        number={i + 1}
        handler={[
          () => goToPageHandler(i + 1),
          () => pageButtonPointerHandler(i),
        ]}
      />
    );
  }

  return buttons;
}

