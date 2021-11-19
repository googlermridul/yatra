import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Header from './components/Pages/Header';
import Footer from './components/Pages/Footer';
import AboutPage from './components/Pages/AboutPage';
import CampaignDetails from './components/Pages/CampaignDetails';
import Login from './components/Pages/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Pages/Register';
import PrivateRoute from './components/Pages/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <PrivateRoute path="/campaign/:campaignId">
            <CampaignDetails />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
