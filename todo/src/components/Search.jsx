
function Search({search,setSearch}) {
  return (
    <div className="search">
        <h2>Pesquisar</h2>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Procurar..."></input>
      
    </div>
  )
}

export default Search
