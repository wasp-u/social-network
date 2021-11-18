// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Community from './components/Community/Community';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper_grid wrapper">
        <Sidebar />
        <div className="wrapper-content">
          <Routes>
            <Route path='/dialog/*' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/community' element={<Community />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
