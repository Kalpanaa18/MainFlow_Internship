import './App.css';
import ComponentFour from './components/ComponentFour';
import ComponentLast from './components/ComponentLast';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import CrousalComponent from './components/CrousalComponent';
import Footer from './components/Footer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ComponentOne/>
      <ComponentTwo/>
      <CrousalComponent/>
      
      <ComponentFour/>
      <ComponentLast/>
      <Footer/>
    </div>
  );
}

export default App;
