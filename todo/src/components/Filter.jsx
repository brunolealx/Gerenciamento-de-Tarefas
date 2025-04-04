function Filter() {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
            <p>Status:</p>
            <select>
                <option value="all">Todos</option>
                <option value="completed">Completas</option>
                <option value="not-completed">Incompletos</option>
            </select>
        </div>
        <div>
            <p>Ordem Alfabética:</p>
            <button>Acendente</button>
            <button>Descendente</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
