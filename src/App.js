import logo from './logo.svg';
import './App.css';
import CounterButton from './cgu_CounterButton'
import HelloCGU from './cgu_hello'
function App() {
  return (
  <div className="App">
  <div>
  { HelloCGU() }
  </div>
  <div>
  {<CounterButton i='1' />}
  {<CounterButton i='2' />}
  {<CounterButton i='3' />}
  {<CounterButton i='4' />}
  {<CounterButton i='5' />}
  {<CounterButton i='6' />}
  {<CounterButton i='7' />}
  {<CounterButton i='8' />}
  {<CounterButton i='9' />}
  {<CounterButton i='10' />}
  </div>
  </div>
  );
 }

export default App;
