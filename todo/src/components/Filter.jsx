function Filter({ filter, setFilter, setSort }) {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="completed">Completas</option>
            <option value="not-completed">Incompletos</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética:</p>
          <button onClick={() => setSort("asc")}>Asc</button>
          <button onClick={() => setSort("desc")}>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
