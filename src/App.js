import logo from './logo.svg';
import './App.css';
import FirstButton from './components/FirstButton';
import SecondButton from './components/SecondButton';
import ThirdButton from './components/ThirdButton';
import FirstAggrid from './AgGrid/FirstAggrid';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

function App() {
  return (
    <div className="App">
      <FirstButton />
      <SecondButton />
      <ThirdButton />
      <FirstAggrid />
    </div>
  );
}

export default App;
