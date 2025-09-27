import { useRef, useState, useEffect } from "react";

export default function useGridColumns() {
  const gridRef = useRef(null);
  const [columns, setColumns] = useState(1);
  useEffect(() => {
    function updateColumns() {
      if (gridRef.current) {
        const computed = window.getComputedStyle(gridRef.current);
        const colCount = computed.gridTemplateColumns.split(' ').length;
        setColumns(colCount);
      }
    }
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  return [gridRef, columns];
}