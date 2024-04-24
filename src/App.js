import './App.css';

const App =()=> {
  const mensaje = "Holaaaa"
  return (
    <div className="App">
      <h1>{mensaje}</h1>
      {+ new Date()}
    </div>
  );
}

export default App;
