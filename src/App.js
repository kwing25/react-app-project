import './App.scss';
import Home from './pages/home';
import Nav from './components/nav';
import Footer from './components/footer';
import Alert from './components/alert';

function App() {
  return (
    <div className="App">
      <Alert />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
