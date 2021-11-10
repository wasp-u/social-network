// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

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
