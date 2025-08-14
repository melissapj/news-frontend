import { useSearchParams } from "react-router-dom";

function SortingQueries() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    console.log(searchParams)
  };

  return (
    <form className="query-form" onSubmit={handleChange}>
      <select
        name="sortby"
        defaultValue={searchParams.get("sortby") || "created_at"}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <select name="order" defaultValue={searchParams.get("order") || "asc"}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button className="query-button" type="submit">
        Apply Filters
      </button>
    </form>
  );
}

export default SortingQueries;
