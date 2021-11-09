// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
