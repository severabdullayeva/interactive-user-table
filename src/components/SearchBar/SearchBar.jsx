import "./SearchBar.css";

export const SearchBar = ({
  search,
  setSearch,
  handleDeleteSelected,
  handleMarkComplete,
}) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Search users..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="delete-btn" onClick={handleDeleteSelected}>
        Delete Selected
      </button>
      <button className="complete-btn" onClick={handleMarkComplete}>
        Mark Complete
      </button>
    </div>
  );
};
