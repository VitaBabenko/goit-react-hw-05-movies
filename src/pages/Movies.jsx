const Movies = () => {
  return (
    <form>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default Movies;
