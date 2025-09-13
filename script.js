body {
  font-family: Arial, sans-serif;
  background-color: #121212; /* modo escuro */
  color: #e0e0e0;
  padding: 20px;
}

h1, h2 {
  text-align: center;
  color: #ffffff;
}

ul {
  list-style: none; /* remove os marcadores padrão */
  padding: 0;
  max-width: 800px;
  margin: 20px auto; /* centraliza horizontalmente */
}

li {
  background-color: #1e1e1e; /* cor de fundo de cada item */
  color: #e0e0e0;
  margin: 8px 0; /* SEPARAÇÃO entre os itens */
  padding: 12px 20px; /* espaço interno */
  border-radius: 8px; /* cantos arredondados */
  cursor: pointer; /* muda o cursor ao passar o mouse */
  transition: all 0.2s;
  border: 1px solid #333;
}

li:hover {
  background-color: #333333;
}

.watched {
  text-decoration: line-through; /* marca como assistido */
  color: #888888;
  background-color: #2a2a2a;
}
