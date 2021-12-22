import './App.scss';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app_reducer';

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Friends = React.lazy(() => import('./components/Friends/Friends'));
const Community = React.lazy(() => import('./components/Community/Community'));
const Feed = React.lazy(() => import('./components/Feed/Feed'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path='/' element={<ProfileContainer />} />
                  <Route path='/dialog/*' element={<Dialogs />} />
                  <Route path='/profile/:userId' element={<ProfileContainer />} />
                  <Route path='/friends' element={<Friends />} />
                  <Route path='/community' element={<Community />} />
                  <Route path='/feed' element={<Feed />} />
                  <Route path='/settings' element={<Settings />} />
                  <Route path='/users' element={<UsersContainer />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='*' element={<div>404 NOT FOUND</div>} />
                </Routes>
              </Suspense>
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
