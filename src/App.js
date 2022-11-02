import './App.css'
import Decrementer from './Components/Decrementer/Decrementer';
import Incrementer from './Components/Incrementer/Incrementer';

function App() {

  return (
    <>
      <div className="App">
        <Incrementer />
        <br />
        <Decrementer />
      </div>
    </>
  );
}

export default App;
