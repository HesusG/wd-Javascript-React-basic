import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <ItemListContainer greeting="Ciudades"/> 
      </header>
    </div>
  );
}

export default App;
