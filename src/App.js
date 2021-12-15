import './App.css';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Community from './components/Community/Community';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app_reducer';


class App extends React.Component {

  componentDidMount() {
    if (!this.props.initialized) {
      this.props.initializeApp()
    }
  }

  render() {
    if (this.props.initialized) {
      return (
        <BrowserRouter>
          <HeaderContainer />
          <div className="wrapper_grid wrapper">
            <SidebarContainer />
            <div className="wrapper-content">
              <Routes>
                <Route path='/' element={<ProfileContainer />} />
                <Route path='/dialog/*' element={<DialogsContainer />} />
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/community' element={<Community />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<Login />} />

              </Routes>
            </div>
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
