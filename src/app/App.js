import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../features/nav/Index';
import './App.css';
import routes from './routes';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <NavBar title="Comic Dance Club" routes={routes} />
        <Routes>
          {routes.map(
            ({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ),
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
