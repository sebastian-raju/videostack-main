import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import './styles/App.css'
import Home from './pages/Home';
import WatchHistory from './pages/WatchHistory';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path={"/"} element={<Landing/>}></Route>
          <Route path={"/home"} element={<Home/>}></Route>
          <Route path={"/history"} element={<WatchHistory/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;