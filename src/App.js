
import './App.css';
import Evento from './components/Event';
import Form from './components/Form';


function App() {
 
  return (
    <div className="App">
    <h1>
      testando onclick
      <Evento numero = '1'/>
      <Evento numero = '2'/>
    </h1>
    <Form/>
    </div>
  );
}

export default App;
