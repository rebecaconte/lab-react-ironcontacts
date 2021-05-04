import logo from './logo.svg';
import Contacts from './components/Contacts'
import './App.css';

 // ITERATION 1
function App(contact) {
  
  const {pictureUrl, name, popularity} = contact

  return (
    <div className="App">
      <Contacts />
    </div>
  );
}

export default App;
