function SortingForm({ sortby, order, setSortby, setOrder, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="query-form">
      <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default SortingForm;