// import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
<Navbar title = "EarnBit"/>
<div className="CardGroup row row-cols-1 row-cols-md-3 g-4 p-4">
  <Display/>
  <Display/>
  <Display/>
</div>
   </>
  );
}

export default App;
