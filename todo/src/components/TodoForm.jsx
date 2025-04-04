import { useState } from 'react';

function TodoForm({ addTodo }) { // Corrigido: desestruturado o parâmetro addTodo
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return; // Validação para evitar campos vazios
    // Adicionar a tarefa
    addTodo(value, category);
    // Limpa os campos
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar nova tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;