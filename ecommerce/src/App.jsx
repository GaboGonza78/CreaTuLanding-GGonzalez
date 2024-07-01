
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
    <Navbar />
    <ItemListContainer greeting={'Item List Container'}/>
    </div>
      
  );
}

export default App