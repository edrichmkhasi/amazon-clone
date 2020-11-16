import './App.css';

// Import components
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="app">
     <h1>Amazon Clone app</h1>
     {/* Header Component */}
     <Header />
     {/* Home Component */}
     <Home />
    </div>
  );
}

export default App;
