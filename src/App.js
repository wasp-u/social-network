// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Community from './components/Community/Community';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper_grid wrapper">
        <Sidebar />
        <div className="wrapper-content">
          <Routes>
            <Route path='/dialog/*' element={<Dialog />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/community' element={<Community />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
