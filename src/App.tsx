import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Header from './components/Header';
import CursorTrail from './components/CursorTrail';
import Footer from './components/Footer';
import './index.css';
import { LocaleProvider } from './context/LocaleContext';

const App = () => {
  return (
    // Set basename to match Vite dev URL (when served at /kevinroux69.github.io/)
    <Router basename="/kevinroux69.github.io">
      <LocaleProvider>
        <div>
          <CursorTrail />
          <Header />
          <Switch>
            {/* Show CV directly at root as requested */}
            <Route path="/" exact component={CV} />
            <Route path="/cv" component={CV} />
            <Route path="/projects" component={Projects} />
          </Switch>
          <Footer />
        </div>
      </LocaleProvider>
    </Router>
  );
};

export default App;