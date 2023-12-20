import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import Home from './Components/Home'
import Account from './Components/Account'
import Search from './Components/Search'
import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'
import MovieItemDetails from './Components/MovieItemDetails'
import Popular from './Components/Popular'
import ProfilePage from './Components/ProfilePage'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/search" component={Search} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/movies/:id" component={MovieItemDetails} />
    <ProtectedRoute exact path="/profilepage" component={ProfilePage} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
