import { useRef, useState, useLayoutEffect } from "react";

export default function useGridColumns() {
  const gridRef = useRef(null);
  const [columns, setColumns] = useState(1);
  useLayoutEffect(() => {
    function updateColumns() {
      if (gridRef.current) {
        const computed = window.getComputedStyle(gridRef.current);
        const colCount =
          computed.gridTemplateColumns === "none"
            ? 1
            : computed.gridTemplateColumns.split(" ").length;
        setColumns(colCount);
      }
    }
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);
  return [gridRef, columns];
}