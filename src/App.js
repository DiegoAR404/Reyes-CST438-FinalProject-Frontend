import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import ShowPlaylist from './components/ShowPlaylist'

function App() {
  return (
    <div className="App">
      <h2>Playlist Service</h2>
        <BrowserRouter>
          <div>
            <Link to="/">User</Link>{' '}
            &nbsp;|&nbsp;&nbsp;
            <Link to="/admin">Admin</Link>{' '}
            <Switch>
              {/* Route to user's home page */}
              <Route exact path="/" component={UserHome} />
              {/* Route to User's Playlist Collection */}
              <Route path="/playlist" component={ShowPlaylist} />
              {/* Route to admin's stuff */}
              <Route path="/admin" component={AdminHome} />
              <Route render={ () => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}


export default App;