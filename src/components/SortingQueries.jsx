import { useEffect, useState } from "react";
import SortingForm from "./SortingForm";

function SortingQueries({ searchParams, setSearchParams }) {
  const [sortby, setSortby] = useState(searchParams?.get("sortby") || "created_at");
  const [order, setOrder] = useState(searchParams?.get("order") || "asc");

  useEffect(() => {
    setSortby(searchParams?.get("sortby") || "created_at");
    setOrder(searchParams?.get("order") || "asc");
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ sortby, order });
  };

  return (
    <SortingForm
      sortby={sortby}
      order={order}
      setSortby={setSortby}
      setOrder={setOrder}
      handleSubmit={handleSubmit}
    />
  );
}

export default SortingQueries;