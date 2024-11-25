import css from './SearchBar.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  const handleChange = evt => {
    onFilterChange(evt.target.value);
  };

  return (
    <div>
      <input
        className={css.search}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
