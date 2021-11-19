import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Header from './components/Pages/Header';
import Footer from './components/Pages/Footer';
import AboutPage from './components/Pages/AboutPage';
import TourDetails from './components/Pages/TourDetails';
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
          <PrivateRoute path="/tour/:tourId">
            <TourDetails />
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

// Live link: https://yatramein.web.app/
// client side code: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-googlermridul
// server side code: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-googlermridul