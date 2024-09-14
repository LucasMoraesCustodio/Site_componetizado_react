import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Aside from './components/Aside.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="container">
            <Header />
            <div className="content">
                <Nav />
                <Main />
                <Aside />
            </div>
            <Footer />
        </div>
  );
}

export default App;
