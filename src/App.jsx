function App() {
  return (
    <form action="/lala" method="POST">
      <div>
        <span>Nombre: </span>
        <input name="campo" />
      </div>
      <input name="campo2" />
      <input type="submit" value="enviar" />
    </form>
  );
}

export default App;
