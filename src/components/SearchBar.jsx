const SearchBar = () => {
  return (
    <div>
      <p>Search</p>
      <input
        type="text"
        style={{
          color: 'rgba(0, 0, 0, 0.7)',
          width: '70%',
          height: 25,
          border: '2px solid rgba(0, 0, 0, .1)',
          borderRadius: '5x',
        }}
        // onChange={}
        // value={}
      />
      <br />
      <label>
        <input style={{ marginTop: '25px' }} type="checkbox" />
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;
